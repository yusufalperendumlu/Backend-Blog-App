import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
} from "../controllers/postControllers";

import { authGuard, adminGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authGuard, adminGuard, createPost);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

export default router;
