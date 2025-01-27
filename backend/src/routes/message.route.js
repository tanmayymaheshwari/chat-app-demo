import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUserSidebar,getMessages,sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUserSidebar);
router.get("/:id", protectRoute, getMessages);
router.put("/send/:id/", protectRoute, sendMessage)
export default router;