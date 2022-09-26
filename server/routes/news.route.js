import { Router } from "express";
import { createNews, deleteOne, getAllNews, getOne, update } from "../controllers/news.controller.js";
const router = Router();

router.post("/create", createNews);

router.get("/getAll", getAllNews);

router.get("/getOne/:id", getOne);

router.put("/update/:id", update);

router.delete("/deleteOne/:id", deleteOne);

export default router;
