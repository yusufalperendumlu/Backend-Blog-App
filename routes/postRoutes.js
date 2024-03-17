import express from "express";
import { createPost } from "../controllers/postControllers";

import { authGuard, adminGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authGuard, adminGuard, createPost);

export default router;
