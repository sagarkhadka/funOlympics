import { Router } from "express";
import { adminLogin, adminRegister } from "../controllers/admin.controller.js";
const router = Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);

export default router;
