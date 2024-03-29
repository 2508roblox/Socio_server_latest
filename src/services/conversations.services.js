import Conversation from "../models/schemas/Conversation.schema.js";
import User from "../models/schemas/User.schema.js";


// services: database, main logic
export class ConversationService {

  
  async createNewConversation(body) {
    const { participants, title } = body;
    let isExist = await Conversation.create({ participants, title })
    return isExist;

  }
  async getConversationById(id) {
   
    let isExist = await Conversation.findById(id)
    return isExist;

  }
  async getMembersByRoomId(id) {
   
    let isExist = await Conversation.findById(id, {"participants": 1, _id: 0})
    console.log(isExist)
    let members = await User.find({
      "_id": {
        $in : isExist.participants
      }
    })
    return members;

  }
  async inviteMembers(body, id) {

    let isExist = await Conversation.findOneAndUpdate({ _id: id}, {
      // addToSet ensure that user id was added if not exist in array
      $addToSet: {
        "participants": {
          $each: body
        }
      }
    }, { upsert: true, new: true })
     
    return isExist;

  }
  async removeMembers(body, id) {

    const isExist = await Conversation.findOneAndUpdate(
      { _id: id },
      // pull to remove 
      { $pull: { participants: { $in: body } } },
      { new: true }
    );
    return isExist;

  }
  async editTitle(body, id) {

    const isExist = await Conversation.findOneAndUpdate(
      { _id: id },
      // pull to remove 
      { $set: { "title": body } },
      { new: true }
    );
    return isExist;

  }
  async editImage(body, id) {

    const isExist = await Conversation.findOneAndUpdate(
      { _id: id },
      // pull to remove 
      { $set: { "cover_image": body } },
      { new: true }
    );
    return isExist;

  }
  async deleteRoom(id) {

    const isExist = await Conversation.deleteOne(
      { _id: id },
    
    );
    return isExist;

  }
  async getAllUserRoom(id) {

    const isExist = await Conversation.find(
     {
       "participants" :{
        $in : id
       }
     }
    
    );
    return isExist;

  }
  async getAllRoom() {

    const isExist = await Conversation.find({});
    return isExist;

  }
  async   getByQuery(query, user_id) {
    const regex = new RegExp(query, 'i');
    
    let conversations = await Conversation.find({ title: { $regex: regex } });
    
    const users = await User.find({
      $and: [
        { username: { $regex: regex } },
        { _id: { $ne: user_id } }
      ]
    });
    
    const userConversations = [];
    
    for (const user of users) {
      const userConversation = await Conversation.findOne({
        participants: {
          $all: [user_id, user._id],
          $size: 2
        }
      });
      
      if (userConversation) {
        userConversations.push(userConversation);
      } else {
        userConversations.push({
          user_id: user._id.toString()
        });
      }
    }
    
    conversations = conversations.concat(userConversations);
    
    return {
      conversations
    };
  }
}
const conversationService = new ConversationService()
export default conversationService