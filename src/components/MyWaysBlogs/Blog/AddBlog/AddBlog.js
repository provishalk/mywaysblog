import React, { useState } from 'react'
import BlogEditor from '../BlogForm/BlogForm'
import './AddBlog.scss'
import axios from "axios";
import MyNavbar from '../../../NavBar/MyNavbar';
const AddBlog = ({history}) => {
    const [title, setTitle] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [htmlContent, setHtmlContent] = useState("");
    const BlogFormHandler = (content) => {
        setHtmlContent(content.editorContent);
        setImgLink(content.imgLink);
        setTitle(content.title);
    }
    const dataSaveHandler = () => {
        const data = {
            heading: title,
            imgLink: imgLink,
            htmlContent: htmlContent,
            publishedOn: new Date().toLocaleDateString()
        }
        axios.post('https://mywaysblogserver.herokuapp.com/api/blog/addBlog', {
            data: data
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.log(error.response));
        history.push("/mywaysblog/admin/home")
    }
    return (
        <>
            <MyNavbar />
            <div className="container mt-2 addBlog">
                <div className="addBlog__blogHeading">
                    <h2>Add Blog</h2>
                    <button className="btn btn-success" onClick={dataSaveHandler}>PUBLISH</button>
                </div>
                        <BlogEditor 
                        onHtmlContentHandler={BlogFormHandler} />
            </div>
        </>
    )
}

export default AddBlog
