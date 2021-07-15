const services = require("../services/commentService");

module.exports = {
  createComment: async (req, res) => {
    const body = req.body;
    let data = await services.createComment(body.userId, body.postId,body.content);
    return res.status(201).json({
      success: 1,
      data: data
    });
  },
  deleteComment: async (req, res) => {
    const body = req.body;
    let data = await services.deletePost(body.commentId);
    return res.status(201).json({
      success: 1,
      data: data
    });
  },

  updateComment: async (req, res) => {
    const body = req.body;
    let data = await services.updatePost(body.commentId,body.content);
    return res.status(201).json({
      success: 1,
      data: data
    });
  },
};