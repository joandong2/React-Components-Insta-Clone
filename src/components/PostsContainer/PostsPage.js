//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import data from "../../dummy-data.js";

const PostsPage = () => {
    // set up state for your data
    return (
        <div className="posts-container-wrapper">
            {/* map through data here to return a Post and pass data as props to Post */}
            {/* 
                - i for indexing, needed to add keys to solve issues with unique "key" prop mostly for mapping, same goes for comments
                - <Post> componenets needed object as prop based from Post.js
            */}
            {data.map((item, i) => {
                return <Post key={i} post={item} />;
            })}
        </div>
    );
};

export default PostsPage;
