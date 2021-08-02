import React from 'react'
import { useHistory } from "react-router-dom";
const BlogHeading = (props) => {
    let history = useHistory();
    const onClickHander = () => {
        history.push(`/mywaysblog/edit/listingBlog/${props._id}`);
    }
    const deleteBlogHandler= () =>{
        console.log("BLog Deleted");
    }
    return (
        <div className="d-flex">
            <div className="container btn btn-info mt-1" onClick={onClickHander}>
                {props.title}
            </div>
            <button className="btn btn-danger mt-1" onClick={deleteBlogHandler}>Del</button>
        </div>

    )
}

export default BlogHeading
