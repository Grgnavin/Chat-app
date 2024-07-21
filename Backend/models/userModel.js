import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        default: ''
    },
    gender: {
        type: "String",
        enum: ["Male", "Female", "Others"],
        required: true
    }
}, {
    timestamps: true
});

export const User = mongoose.model('User', userModel);