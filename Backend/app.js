import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js"

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser())

//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/message", messageRouter);

export {
    app
}