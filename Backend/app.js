import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js"
import cors from "cors"
const app = express();

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/message", messageRouter);

export {
    app
}