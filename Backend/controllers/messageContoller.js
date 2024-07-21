import mongoose from "mongoose";
import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

const sendMessage =async (req,res) => {
try {
    if (!req.id) {
        return res.status(403).json({
            message: "User not loggedIn"
        })
    }

    const senderId = req.id
    const receiverId = req.params.id;
    const { message } = req.body;

    const senderObjectId = new mongoose.Types.ObjectId(senderId);
    const receiverObjectId = new mongoose.Types.ObjectId(receiverId);

    let gotConversation = await Conversation.findOne({
        participants: { $all: [senderObjectId, receiverObjectId] }
    })

    if (!gotConversation) {
        gotConversation = await Conversation.create({
            participants: [senderId, receiverId]
        })
    }
    const newMessage = await Message.create({
        senderId: senderObjectId,
        recieverId: receiverObjectId,
        message
    })

    if (newMessage) {
        gotConversation.messages.push(newMessage._id);
        await gotConversation.save()
    }

    await gotConversation.save();

    //Socket IO
    return res.status(200).json({
        message: "Message send sucessfully"
    })
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Internal server error"
    })
}
}

export {
    sendMessage
}