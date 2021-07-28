import React,{useState,useEffect} from 'react';
import MainHeading from '../MainHeading/MainHeading';
import BlogCard from '../BlogCard/BlogCard';
import axios from "axios";

const MyWaysBlogs = () => {
    const [blogs, setBlogs] = useState([]);

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
        <MainHeading />
        <div class="container col-lg-8">
            <div class="row">
                {blogs.map((blog=>{return <div className="col-md-4 mb-3"><BlogCard blog={blog} key={blog._id}/></div>}))}
            </div>
        </div>
    </div>
)
}

export default MyWaysBlogs
