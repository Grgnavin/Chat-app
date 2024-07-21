import { Router } from "express";
import { getMessage, sendMessage } from "../controllers/messageContoller.js";
import isAuthenticated  from "../middleware/isAuthenticates.js";

const router = Router();

router.route('/send/:id').post(isAuthenticated ,sendMessage);
router.route('/:id').get(isAuthenticated ,getMessage);

export default router;
