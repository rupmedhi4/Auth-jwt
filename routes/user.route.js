import express from "express";
import {  signupOrLogin} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signupOrLogin);


export default router;
