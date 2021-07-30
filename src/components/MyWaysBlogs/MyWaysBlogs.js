import React,{useState,useEffect} from 'react';
import BlogCard from "./Blog/BlogCard/BlogCard"
import axios from "axios";
import MyNavbar from '../NavBar/MyNavbar'
import "./MyWaysBlogs.scss"
const MyWaysBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(localStorage);
    useEffect(() => {
        axios
          .get("https://mywaysblogserver.herokuapp.com/api/blog/allBLogs")
          .then((response) => {
             setBlogs(response.data);
          })
          .catch((error) => console.log(error.response));
      }, []);
return (
    <div className="myWaysBlogs">
        <MyNavbar/>
        <div className="myWaysBlogs__mainHeading">
            <h1>MyWays Blogs</h1>
        </div>
        <div class="container col-lg-8">
            <div class="row">
                {blogs.map((blog=>{return <div className="col-md-4 mb-3"><BlogCard blog={blog} key={blog._id}/></div>}))}
            </div>
        </div>
    </div>
)
}

export default MyWaysBlogs
