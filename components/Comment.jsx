"use client";

import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Comment = ({ post, setPostId, handleTagClick }) => {
  const { data: session } = useSession();
  const formatTimestamp = (timestamp) => {
    const timeAgo = formatDistanceToNow(new Date(timestamp), {
      addSuffix: true,
    });
    return timeAgo;
  };

  console.log(post._id);

  const handleDelete = async () => {};

  return (
    <>
      <div className="bg-white shadow-md rounded-md p-4 my-4">
        <div className="flex items-center">
          <Image
            src={post.creator.image}
            className="rounded-full"
            alt="user_image"
            width={40}
            height={40}
          />
          <div className="ml-4">
            <h5 className="text-xl font-bold">{post.subject}</h5>
            <h6 className="text-gray-500">
              {post.creator.username} · {formatTimestamp(post.time)}
            </h6>
          </div>
        </div>
        <p className="mt-4">{post.newPost}</p>
        <div className="flex items-center mt-4">
          <button className="text-blue-500 mr-4">LIKE</button>
          <span>
            <p>{post.likes}</p>
          </span>
          <button className="text-blue-500 ml-4">COMMENT</button>
        </div>
        {session?.user.email == post.creator.email && (
          <div className="flex items-center mt-4">
            <button
              className="text-blue-500 m-1"
              onClick={() => {
                setPostId(post._id);
              }}
            >
              EDIT
            </button>
            <button className="text-blue-500 m-1" onClick={handleDelete}>
              DELETE
            </button>
          </div>
        )}

        {post.comments && post.comments.length > 0 && (
          <>
            <p className="text-gray-500 mt-4">VIEW MORE COMMENTS..</p>
            <div className="flex items-center mt-4">
              <img src="" className="rounded-full h-10 w-10" alt="" />
              <div className="ml-4">
                <div className="bg-gray-100 p-3 rounded-md">
                  <div className="flex items-center">
                    <h6 className="text-gray-500">USERNAME · TIME</h6>
                  </div>
                  <p className="mt-2">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="text-blue-500 mt-2">LIKES</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Comment;
