import React, { useEffect, useState } from "react";
import { newPost } from "../api";

const NewPosts = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("userToken")

    const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title: title,
                description: description,
                price: price,
                location: location,
                willDeliver: willDeliver,

            }
        })
    }).then(response => response.json())
        .then(result => {
            console.log([result.data.post]);

            const arr = posts.concat([result.data.post]);

            setPosts(arr);

            console.log(posts);

        })
        .catch(console.error);

    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setWillDeliver(false);



      }
        return (
          <div class="actions">
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                  <label>Username</label>
                  <input id='username'  onChange={handleOnChange} placeholder="Your Username here" value={username} />
                  <label>Password</label>
                  <input id= 'password' onChange={handleOnChange} placeholder='Your Password Here' value={password} />
                  <button type="submit">Login</button>
              </form>
            </div>
        );
};

export default NewPosts;
