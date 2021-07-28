import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './Blog.scss'
const Blog = () => {
    const [blog, setBlog] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios.post('https://mywaysblogserver.herokuapp.com/api/blog/oneBlog', {
            _id: id 
        })
        .then((response) => {
            setBlog(response.data);
         })
         .catch((error) => console.log(error.response));
    }, [id]);
    return (
        <div className="container blog">
            <div className="row ml-4">
                <div className="col-md-8">
                    <h1>{blog.heading}</h1>
                </div>
                <div className="col-md-8">
                    <img src={blog.imgLink} className="col-md-12 d-flex " alt="Blog Img" />
                </div>
                <div className="col-md-10 blog__controlImg">
                    {ReactHtmlParser(blog.htmlContent)}
                </div>
            </div>
        </div>
    )
}

export default Blog
