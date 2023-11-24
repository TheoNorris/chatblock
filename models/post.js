import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  time: {
    type: Date,
    required: true,
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
  },
  newPost: {
    type: String,
    required: [true, "Post is required"],
  },
  likes: {
    type: Number,
  },
  comments: {
    type: Array,
  },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
