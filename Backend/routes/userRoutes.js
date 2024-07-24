import { Router } from "express";
import { 
    getOtherUsers, 
    loginUser, 
    logout, 
    registerUser 
} from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticates.js";

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').delete(logout);
router.route('/').get(isAuthenticated ,getOtherUsers);

export default router;