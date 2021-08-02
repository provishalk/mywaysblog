import React, { useEffect,useState } from 'react'
import MyNavbar from '../../../../NavBar/MyNavbar'
import BlogHeading from './BlogHeading/BlogHeading'
import axios from 'axios'
const ListingBlog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios
          .get("https://mywaysblogserver.herokuapp.com/api/blog/allBLogs")
          .then((response) => {
             setBlogs(response.data);
          })
          .catch((error) => console.log(error.response));
      }, []);
    return (
        <>
            <MyNavbar />
            <div className="container">
                <div className="row">
                    <h2>Select Blog To Edit</h2>
                </div>
                {blogs.map((blog)=>{return <BlogHeading title={blog.heading} key={blog._id} _id={blog._id}/>})}
            </div>
        </>
    )
}

export default ListingBlog
