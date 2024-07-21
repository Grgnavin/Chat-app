import dotenv from 'dotenv';
import connectDb from "./config/db.js";
import { app } from './app.js';

dotenv.config({});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    connectDb();
    console.log(`Server listening at port ${PORT}`);
});