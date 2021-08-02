import MyWaysBlogs from "./components/MyWaysBlogs/MyWaysBlogs";
import { BrowserRouter, Route } from "react-router-dom";
import AddBlog from "./components/MyWaysBlogs/Blog/AddBlog/AddBlog"
import Blog from "./components/MyWaysBlogs/Blog/Blog";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";
import alertify from "alertifyjs";
import AdminLogin from "./components/Admin/Login/Login";
import AdminHome from "./components/Admin/index"
import EditBlog from "./components/MyWaysBlogs/Blog/EditBlog/EditBlog"
import ListingBlog from "./components/MyWaysBlogs/Blog/EditBlog/ListingBlog/ListingBlog"
alertify.set('notifier','position', 'top-right');
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={MyWaysBlogs} />
        <Route path="/mywaysblog/admin" exact component={AdminLogin} />
        <Route path="/mywaysblog/admin/home" exact component={AdminHome} />
        <Route path="/mywaysblog" exact component={MyWaysBlogs} />
        <Route path="/mywaysblog/login" exact component={Login} />
        <Route path="/mywaysblog/register" exact component={Register} />
        <Route path="/mywaysblog/addBlog" exact component={AddBlog} />
        <Route path="/mywaysblog/edit/listingBlog/:id" exact component={EditBlog} />
        <Route path="/mywaysblog/edit/listingBlog" exact component={ListingBlog} />
        <Route path="/mywaysblog/blog/:id" exact component={Blog} />
      </BrowserRouter>
    </>
  );
}

export default App;
