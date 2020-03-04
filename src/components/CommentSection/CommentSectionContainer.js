// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
    // Add state for the comments
    const [comments, setComments] = useState(props.comments);
    const [comment, setComment] = useState("");

    const changeHandler = (e) => {
        setComment(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        comments.push({ username: "john", text: comment });
        setComments(comments);
        setComment("");
    };

    return (
        <div className="comment-wrapper">
            {/* map through the comments data and return the Comment component */}
            {comments.map((item, i) => {
                return <Comment key={i} comment={item} />;
            })}
            <CommentInput
                comment={comment}
                changeComment={changeHandler}
                submitComment={submitHandler}
            />
        </div>
    );
};

export default CommentSection;
