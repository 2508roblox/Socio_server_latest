//controller: call service method and return json
import conversationService from "../services/conversations.services.js"
import userService from "../services/users.services.js"
export const createConversationController = async (req, res) => {
    const result =  await conversationService.createNewConversation(req.body)
  
  return res.json({ result })
}
export const getConversationController = async (req, res) => {
    let id = req.params.id

    const result =  await conversationService.getConversationById(id)
  
  return res.json({ result })
}
export const getAllMembersByRoomIdController = async (req, res) => {
    let id = req.params.id
    const result =  await conversationService.getMembersByRoomId(id)
  
  return res.json({ result })
}
export const inviteMembersController = async (req, res) => {
   let body = req.body.newMembers
   let id = req.params.id
    const result =  await conversationService.inviteMembers(body, id)
  
  return res.json({ result })
}
export const removeMembersController = async (req, res) => {
   let body = req.body.newMembers
   let id = req.params.id
    const result =  await conversationService.removeMembers(body, id)
  
  return res.json({ result })
}
export const editConversationTitleController = async (req, res) => {
   let body = req.body.title
   let id = req.params.id
    const result =  await conversationService.editTitle(body, id)
  
  return res.json({ result })
}
export const editConversationImageController = async (req, res) => {
   let body = req.body.image
   let id = req.params.id
    const result =  await conversationService.editImage(body, id)
  
  return res.json({ result })
}
export const deleteConversationTitleController = async (req, res) => {
   let id = req.params.id
    const result =  await conversationService.deleteRoom( id)
  
  return res.json({ result })
}
export const getConversationsByUserIdController = async (req, res) => {
  const user_id = req.decoded_authorization.user_id


    const result =  await conversationService.getAllUserRoom( user_id)
  
  return res.json({ result })
}
export const getAllConversationController = async (req, res) => {
 
  const result =  await conversationService.getAllRoom(  )

return res.json({ result })
}
export const getConversationByQueryController = async (req, res) => {
  let query = req.params.query
  const result =  await conversationService.getByQuery(query)

return res.json({ result })
}