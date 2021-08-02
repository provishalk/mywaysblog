import React,{useEffect, useState} from 'react';
import MyNavbar from '../../../NavBar/MyNavbar';
import BlogForm from "../BlogForm/BlogForm";
import { useParams } from 'react-router-dom';
import axios from 'axios';
const EditBlog = ({history}) => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    let updatedBlog = {};
    useEffect(() => {
        axios.post('https://mywaysblogserver.herokuapp.com/api/blog/oneBlog', {
            _id: id 
        })
        .then((response) => {
            setBlog(response.data);
         })
         .catch((error) => console.log(error.response));
    }, [id]);
    const BlogFormHandler = (data) =>{
        updatedBlog = data;
    }
    const onSubmitHandler = () =>{
        axios.post('https://mywaysblogserver.herokuapp.com/api/blog/editBlog', { 
            _id: id,
            updatedBlog
        })
        .then((response) => {
            console.log(response.data)
         })
         .catch((error) => console.log(error.response));
         history.push("/mywaysblog/admin/home")  
    }
    return (
        <>
            <MyNavbar/>
            <div className="container blogForm">
                <div className="d-flex">
                    <h1>Blog Editor</h1>
                    <button className="btn btn-danger ml-auto" onClick={onSubmitHandler}>Submit</button>
                </div>
                <div className="row">
                    <div className="col-10 m-auto">
                        <BlogForm 
                        onHtmlContentHandler={BlogFormHandler} 
                        defaultTitle={blog.heading}
                        defaultImgLink={blog.imgLink}
                        defaultHtmlContent={blog.htmlContent}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditBlog
