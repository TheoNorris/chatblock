"use client";

import Nav from "@components/Nav";
import Comment from "@components/Comment";

import { useState, useEffect } from "react";

const CommentCardList = ({ data, setPostId, handleTagClick }) => {
  const reversedData = [...data].reverse();

  return reversedData.map((post) => (
    <Comment
      key={post._id}
      post={post}
      setPostId={setPostId}
      handleTagClick={handleTagClick}
    />
  ));
};

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/comment");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Nav />
      <section>
        <div className="profile-container flex">
          <div className="bg-white shadow-md rounded-md p-4 my-4 edit-div">
            <div className="flex flex-col">
              <form action="" className="flex flex-col">
                <label htmlFor="" className="text-l font-bold mt-4">
                  Subject
                </label>
                <input
                  type="text"
                  className="p-1 mt-4 pl-4 mb-4 editbox"
                  placeholder={post.subject}
                />
                <label htmlFor="" className="text-l font-bold">
                  Comment
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="p-4 mt-4 editbox"
                >
                  {post.newPost}
                </textarea>
                <button className="edit-button m-2 w-full">SAVE</button>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <CommentCardList
              data={posts}
              setPostId={setPostId}
              handleTagClick={() => {}}
            />
          </div>
          <div className="w-full lg:w-1/2"></div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
