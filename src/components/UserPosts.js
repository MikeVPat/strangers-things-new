import React, { useEffect, useState } from "react";
import { getPosts,getMess,deletePost, modifyPost } from "../api";
import ModifyPost from "./ModifyPost";
import NewPosts from "./NewPosts";
import "./Userposts.css";
const UserPosts = ({ userLogIn,tokenState, }) => {
  const [posts, setPosts] = useState([]);
  const [newPostFlag, setNewPostFlag] =useState(false)
  const [modifyFlag, setModifyFlag] =useState(false)
  const[setSinglePost,setMessageFlag]=useState([])
  


  if(userLogIn){
    useEffect(() => {
    
    async function getAllPosts() {
      let token = localStorage.getItem("token");
      console.log(token);
      const myReturnData = await getMess(token);
      console.log(myReturnData);
      setPosts(myReturnData);
    }
    getAllPosts();
  }, [])

  }else{
    
    useEffect(() => {
  
    try {
      Promise.all([getPosts()]).then(([posts]) => {
        setPosts(posts);
      });
    } catch (error) {
      console.error(error, "something broke");
    }
  }, []);
}
  <ModifyPost posts={posts} setPosts={setPosts} />;
  
const showPosts=
posts.length ? 
(<>

   {posts.map((post, index) => {
        return (
          <div
            className="post2"
            index={post._id}
            style={{
              alignItems: "center",
              margin: "20px 60px",
              border: "1px solid black",
              padding: "10px",}}>
            <h3>{post.title}</h3>
            <h4>{post.author.username}</h4>
            <p>{post.description}</p>
            <h3>{post.price}</h3>
            <button id={`${posts.id}`} />
            <button id="modpost" onSubmit={modifyPost}/>
          </div>
        );}
      )}
      </>)
      :(<div>Loading</div>)




            

  return(<>
      { userLogIn ? (   <>

     {showPosts}
      
     
      </>)
      : 
      (<>
        {posts.map((post, index) => {
        return (
          <div
            className="post2"
            index={posts._id}
            style={{
              alignItems: "center",
              margin: "20px 60px",
              border: "1px solid black",
              padding: "10px",}}>
            <h3>{post.title}</h3>
            <h4>{post.author.username}</h4>
            <p>{post.description}</p>
            <h3>{post.price}</h3>
          </div>
          );}
      )}</>)}
      </>)
     


            }
            export default UserPosts;