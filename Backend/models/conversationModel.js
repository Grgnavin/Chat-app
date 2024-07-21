import mongoose from "mongoose";
import { User } from "./userModel.js";
import { Message } from "./messageModel.js";
const conversationModel = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Message
        }
    ]
}, {
    timestamps: true
}) 

export const Conversation = mongoose.model('Conversation', conversationModel);
