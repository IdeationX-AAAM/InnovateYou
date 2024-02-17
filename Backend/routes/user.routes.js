import { Router } from "express";
import {registerUser} from '../controllers/verification.controller.js'


const router = Router(); 
router.route('/register').post(registerUser);

export default router; 