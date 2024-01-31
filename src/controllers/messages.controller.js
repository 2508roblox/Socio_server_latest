//controller: call service method and return json
import messageServices from "../services/messages.services.js"
export const createMessageController = async (req, res) => {
    const result =  await messageServices.createNewMessage(req.body)
  
  return res.json({ result })
}
export const getAllMessageByIdController = async (req, res) => {
    let room_id = req.params.conversationId
    let page = req.params.page
    const result =  await messageServices.getAllMessByRoomId(room_id, page)
  
  return res.json({ result })
}
export const getMessageByIdController = async (req, res) => {
    let messId = req.params.messId
  
    const result =  await messageServices.getMessById(messId)
  
  return res.json({ result })
}
export const deleteMessageController = async (req, res) => {
    let mess_id = req.params.messageId
    const result =  await messageServices.deleteMess(mess_id)
  
  return res.json({ result })
}
export const hiddenMessageController = async (req, res) => {
    let mess_id = req.params.messageId
    let {user_id} = req.body
    const result =  await messageServices.hiddenMess(mess_id, user_id)
  
  return res.json({ result })
}
export const updateMessageController = async (req, res) => {
    let mess_id = req.params.messageId
    let body = req.body
    const result =  await messageServices.updateMess(body, mess_id)
  
  return res.json({ result })
}
 