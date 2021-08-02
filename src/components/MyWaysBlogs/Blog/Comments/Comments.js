import React, { useState, useEffect } from 'react';
import "./Comments.scss";
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Comments = () => {

    const [comment, setComment] = useState("");
    const isLoggedIn = localStorage.getItem("user");
    const [comments, setComments] = useState([])
    const id = useParams();
    const blogId = id.id;
    useEffect(() => {
        axios
            .post("https://mywaysblogserver.herokuapp.com/api/comments/getComment", { blogId })
            .then(res => setComments(res.data))
            .catch(err => console.error(err));
    }, [blogId])
    const onClickHander = () => {
        const userId = JSON.parse(isLoggedIn).userId;
        const userName = JSON.parse(isLoggedIn).fullName;
        const data = {
            blogId,
            comments:
            {
                userId,
                userName,
                comment
            }
        }
        axios
            .post("https://mywaysblogserver.herokuapp.com/api/comments/addComment", data)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
            setComment("");
    }
    return (

        <div className="col-md-6 comments">
            <h4>Comments</h4>
            <hr />
            {comments.map((comment) => {
                return <div key={comment._id}>
                    <div className="d-flex">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriFFJXaLLV3g1bFT8PrDRFbD50XjQ7lm_0g&usqp=CAU" width="20px" height="20px" alt="user"/>
                        <div className="font-weight-bold ml-1">{comment.userName.toUpperCase()}</div>
                    </div>

                    <span className="ml-4">{comment.comment}</span>
                </div>
            })}
            {isLoggedIn ? (
                <>
                    <input type="text"
                        placeholder="Comment"
                        className="comments__new_comment"
                        value={comment}
                        onChange={(event) => {
                            setComment(event.target.value);
                        }}
                    />
                    <button className="btn btn-success mt-1 ml-auto d-flex mb-4" onClick={onClickHander}>Add</button>
                </>
            ) : (
                <><div className="text-right mr-4">Login To Comment</div></>
            )}
        </div>
    )
}

export default Comments
