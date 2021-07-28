import React,{useState} from 'react'
import BlogEditor from '../BlogEditor/BlogEditor'
import './AddBlog.scss'
import axios from "axios";
const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [htmlContent, setHtmlContent] = useState("");
    const htmlContentHandler = (html)=>{
        setHtmlContent(html);
    }

    const dataSaveHandler = ()=>{
         const data = {
             heading:title,
             imgLink:imgLink,
             htmlContent:htmlContent,
             publishedOn: new Date().toLocaleDateString()
         }
         axios.post('https://mywaysblogserver.herokuapp.com/api/blog/addBlog', {
            data:data
        })
        .then((response) => {
            console.log(response.data);
         })
         .catch((error) => console.log(error.response));
         setTitle("");
         setHtmlContent("");
         setImgLink("");
    }
    return (
        <div className="container mt-4 addBlog">
            <div className="addBlog__blogHeading">
                <h2>Add Blog</h2>
                <button className="btn btn-success" onClick={dataSaveHandler}>PUBLISH</button>
            </div>
            <input className="mb-1 p-1" placeholder="Your Title Here" value={title} onChange={(event)=>{
                setTitle(event.target.value);
            }}/>
            <input className="mb-1 p-1" placeholder="Image Link" value={imgLink} onChange={(event)=>{
                setImgLink(event.target.value);
            }}/>
            <BlogEditor onHtmlContentHandler={htmlContentHandler}/>
        </div>
    )
}

export default AddBlog
