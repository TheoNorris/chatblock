"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    subject: "",
    newPost: "",
  });

  const createNewPost = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const response = await fetch("/api/comment/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          time: new Date(),
          subject: post.subject,
          newPost: post.newPost,
          likes: 0,
          comments: [],
        }),
      });

      if (response.ok) {
        router.push("/profilepage");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createNewPost}
    />
  );
};

export default CreatePost;
