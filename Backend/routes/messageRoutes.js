import { Router } from "express";
import { sendMessage } from "../controllers/messageContoller.js";
import isAuthenticated  from "../middleware/isAuthenticates.js";

const router = Router();

router.route('/send/:id').post(isAuthenticated ,sendMessage);

export default router;
