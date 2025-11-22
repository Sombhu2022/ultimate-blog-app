import { Comment } from "../models/comment.model.js";

class CommentService {

  // Create a new comment
  async createComment(data) {
    return await Comment.create(data);
  }

  // Get all comments for a blog
  async getCommentsByBlog(blogId) {
    return await Comment.find({ blogId }).sort({ createdAt: -1 });
  }

  // Delete a comment
  async deleteComment(commentId) {
    return await Comment.findByIdAndDelete(commentId);
  }
}

export default new CommentService();
