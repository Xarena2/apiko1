import React, { useState, useEffect } from "react";

const App = () => {
  const [post, setPost] = useState([]);
  const [result, setResult] = useState([]);

  const getPost = async () => {
    let responce = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let e = await responce.json();
    setPost(e);
  };
  useEffect(() => {
    getPost();
  });

  return (
    <div>
      {post.map((p) => {
        return (
          <div>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default App;
