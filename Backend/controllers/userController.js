import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const options =  { 
    maxAge:1*24*60*60*1000, 
    httpOnly:true, 
    sameSite: 'strict'
};

const registerUser = async(req, res) => {
    const {fullName, email, password, gender} = req.body;
    if(!fullName|| !email || !password || !gender) return res.status(400).json({ message: "All fields are required" });
    try {
        const findUser = await User.findOne({email});
        if(findUser) return res.status(400).json({ message: "Username already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const malePhoto = `https://avatar.iran.liara.run/public/boy?fullName=${fullName}`
        const femalePhoto = `https://avatar.iran.liara.run/public/girl?fullName=${fullName}`
        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            gender,
            profile: gender === "Male" ? malePhoto : femalePhoto
        })

        if(!user) return res.status(400).json({ message: "Error creating the user" });

        return res.status(201).json({
            user,
            message: "User created successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server Error"
        })
    }
}

const loginUser = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password ) return res.status(400).json({ message: "All fields are required" });

try {
    const user = await User.findOne({ email });

    if(!user) return res.status(400).json({ message: "Incorrect username or password" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect) return res.status(400).json({ message: "Incorrect username or password" });

    const tokenData = {
        userId : user._id
    }
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d'});
    
    return res.status(200)
                    .cookie("token", token, options)
                    .json({
                        user,
                        message: `Logged in as ${user.fullName}`
                    })
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Internal server Error"
    })
}
} 

const logout = async(req,res) => {
    try {
        return res.status(200)
                .cookie("token", "", { maxAge:0 })
                .json({  
                    message: "User logged out sucessfully"
                })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server Error"
        })
    }
}

export const getOtherUsers = async(req,res) => {
    try {
        const loggedInUserId = req.id;
        const otherUsers = await User.find({ _id:{$ne: loggedInUserId} }).select('-password');
        return res.status(200).json(otherUsers)
    } catch (error) {
        console.log(error);
    }
}

export { 
    registerUser,
    loginUser,
    logout
}