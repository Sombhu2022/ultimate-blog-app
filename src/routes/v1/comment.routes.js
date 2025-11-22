import express from "express";
import commentController from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", commentController.createComment);
router.get("/:blogId", commentController.getComments);
router.delete("/delete/:id", commentController.deleteComment);

export default router;
