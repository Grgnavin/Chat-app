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

const getMessage = async(req, res) => {
try {
    const recieverId = req.params.id;
    const senderId = req.id;

    const senderObjectId = new mongoose.Types.ObjectId(senderId);
    const receiverObjectId = new mongoose.Types.ObjectId(recieverId);

    const conversation = await Conversation.findOne({
        participants: {$all: [ senderObjectId, receiverObjectId ]}
    }).populate("messages");
    if (!conversation) {
        return res.status(404).json({
            message: "Conversation not found"
        });
    }
    return res.status(200).json(conversation.messages);

} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Internal server error"
    })
}
}

export {
    sendMessage,
    getMessage
}