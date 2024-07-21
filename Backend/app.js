import express from "express";
import userRouter from "./routes/userRoutes.js"

const app = express();

//Middlewares
app.use(express.json());

//routes
app.use("/api/v1/users", userRouter);

export {
    app
}