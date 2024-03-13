import { uploadPicture } from "../middleware/uploadPictureMiddleware";
import Post from "../models/Post";
import { fileRemover } from "../utils/fileRemover";

const createPost = async (req, res, next) => {
  try {
    const post = new Post({});
  } catch (error) {
    next(error);
  }
};

export { createPost };
