"use client";

import Nav from "@components/Nav";
import Comment from "@components/Comment";

import { useState, useEffect } from "react";

const CommentCardList = ({ data, handleTagClick }) => {
  const reversedData = [...data].reverse();

  return reversedData.map((post) => (
    <Comment key={post._id} post={post} handleTagClick={handleTagClick} />
  ));
};

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);

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
          <div className="w-full lg:w-1/2">
            <CommentCardList data={posts} handleTagClick={() => {}} />
          </div>
          <div className="w-full lg:w-1/2"></div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
