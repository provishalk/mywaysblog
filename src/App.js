import MyNavbar from "./components/NavBar/MyNavbar";
import MyWaysBlogs from "./components/MyWaysBlogs/MyWaysBlogs";
import { BrowserRouter, Route } from "react-router-dom";
import AddBlog from "./components/AddBlog/AddBlog";
import Blog from "./components/MyWaysBlogs/Blog/Blog";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Route path="/MyWaysBlogs" exact component={MyWaysBlogs} />
        <Route path="/MyWaysBlogs/login" exact component={Login} />
        <Route path="/MyWaysBlogs/register" exact component={Register} />
        <Route path="/MyWaysBlogs/addBlog" exact component={AddBlog} />
        <Route path="/MyWaysBlogs/blog/:id" exact component={Blog} />
      </BrowserRouter>
    </>
  );
}

export default App;
