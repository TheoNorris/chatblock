import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const POST = async (req) => {
  const { userId, time, subject, newPost, likes, comments } = await req.json();

  try {
    await connectToDB();
    const newComment = new Post({
      creator: userId,
      time,
      subject,
      newPost,
      likes,
      comments,
    });

    await newComment.save();

    return new Response(JSON.stringify(newComment), { status: 201 });
  } catch (e) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
