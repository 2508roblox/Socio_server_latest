import Message from "../models/schemas/Message.schema.js";
import User from "../models/schemas/User.schema.js";

// services: database, main logic
export class MessageService {
    limit = 5
  async createNewMessage(body) {
 
    let new_message = await Message.create(body);
    return new_message;
  }
  async getAllMessByRoomId(room_id, page) {
    let messages = await Message.find({
      conversation: room_id,
    })
    .skip((page - 1) * this.limit) // Skip documents based on current page and limit
    .limit(this.limit) // Limit the number of documents returned
    .exec();
    return messages;
  }
  async getMessById(mess_id) {
    let messages = await Message.find({
      _id: mess_id,
    })
   
    return messages;
  }
  async deleteMess(mess_id) {
    let messages = await Message.findOneAndUpdate(
      {
        _id: mess_id,
      },
      {
        $set: {
          status: "removed",
        },
      },
      {
        new: true,
      }
    );
    return messages;
  }
  async updateMess(body , mess_id) {
    let messages = await Message.findOneAndUpdate(
      {
        _id: mess_id,
      },
      {
        $set:  body,
      },
      {
        new: true,
      }
    );
    return messages;
  }
  async hiddenMess(  mess_id, user_id) {
    let messages = await Message.findOneAndUpdate(
      {
        _id: mess_id,
      },
      {
        $addToSet:  {
            hidden: user_id
        },
      },
      {
        new: true,
      }
    );
    return messages;
  }
}
const messageServices = new MessageService();
export default messageServices;
