import { useState, useEffect } from "react";

const FetchPosts = () => {
  const [postdata, setpostdata] = useState([]);
  const [commentByID, setCommentById] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    setpostdata(data);
  };

  const FetchCommentByID = async (id) => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = await result.json();
    setCommentById(data);
  };

  return (
    <>
      {commentByID.map((com) => {
        return <p className="pone">{com.body}</p>;
      })}
      {postdata.map((post) => {
        return (
          <div>
            <h1>{post.title}</h1>;<p>{post.body}</p>
            <button
              onClick={() => {
                FetchCommentByID(post.id);
              }}
            >
              see comments
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FetchPosts;
