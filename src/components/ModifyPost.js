import { useEffect } from "react";
import { deletePost, getPosts } from "../api";

const ModifyPost = ({ posts, setPosts }) => {

  const handleDelete = (event) => {
    event.preventDefault;
    const token = localStorage.getItem("token");
    deletePost(token, event.target.id);
  };
  useEffect(() => {
    async function getAllPosts() {
      if (!posts.length) {
        const returnedPosts = await getPosts();
        setPosts(returnedPosts);
      }
    }
    getAllPosts();
  });

  return (
    <>
    <div class="delete"
      <form onSubmit={handleDelete}
    />
    </>);
};

export default ModifyPost;
