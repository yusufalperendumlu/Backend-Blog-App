import express from "express";
import { createComment } from "../controllers/commentControllers";

import { authGuard, adminGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authGuard, createComment);

export default router;
