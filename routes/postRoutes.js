import express from "express";
import {} from "../controllers/postControllers";

import { authGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/");

export default router;
