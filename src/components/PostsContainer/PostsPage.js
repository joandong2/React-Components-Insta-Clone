//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data.js";

console.log(dummyData);

const PostsPage = () => {
    // set up state for your data
    return (
        <div className="posts-container-wrapper">
            {/* map through data here to return a Post and pass data as props to Post */}
            {dummyData.map((item) => {
                //console.log(item.username);
                // let post = {
                //     username: item.username,
                //     thumbnailUrl: item.thumbnailUrl,
                //     src: item.imageUrl
                // };

                return (
                    <Post
                        post={{
                            username: item.username,
                            thumbnailUrl: item.thumbnailUrl,
                            src: item.imageUrl
                        }}
                    />
                );
            })}
        </div>
    );
};

export default PostsPage;
