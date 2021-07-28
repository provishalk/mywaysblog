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
        <Route path="/mywaysblog" exact component={MyWaysBlogs} />
        <Route path="/mywaysblog/login" exact component={Login} />
        <Route path="/mywaysblog/register" exact component={Register} />
        <Route path="/mywaysblog/addBlog" exact component={AddBlog} />
        <Route path="/mywaysblog/blog/:id" exact component={Blog} />
      </BrowserRouter>
    </>
  );
}

export default App;
