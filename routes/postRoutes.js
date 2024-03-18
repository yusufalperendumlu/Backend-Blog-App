import express from "express";
import { createPost, updatePost } from "../controllers/postControllers";

import { authGuard, adminGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authGuard, adminGuard, createPost);
router.put("/:slug", authGuard, adminGuard, updatePost);

export default router;
