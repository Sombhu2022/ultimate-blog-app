import commentService from "../services/comment.service.js";

class CommentController {

  // Create
  async createComment(req, res) {
    try {
      const { comments, blogId } = req.body;

      if (!comments || !blogId) {
        return res.status(400).json({ message: "comments & blogId are required" });
      }

      const newComment = await commentService.createComment({
        comments,
        blogId,
      });

      return res.status(201).json({
        message: "Comment added successfully",
        data: newComment,
      });

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get all comments for a blog
  async getComments(req, res) {
    try {
      const { blogId } = req.params;

      const comments = await commentService.getCommentsByBlog(blogId);

      return res.status(200).json({
        message: "Comments fetched successfully",
        data: comments,
      });

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete
  async deleteComment(req, res) {
    try {
      const { id } = req.params;

      await commentService.deleteComment(id);

      return res.status(200).json({ message: "Comment deleted" });

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new CommentController();
