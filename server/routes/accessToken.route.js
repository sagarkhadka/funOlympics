import { createAccessToken, deleteToken } from "../controllers/accessToken.controller.js";
import { Router } from "express";
const router = Router();

router.post("/createAccessToken", createAccessToken);
router.delete("/logout", deleteToken);

export default router;
