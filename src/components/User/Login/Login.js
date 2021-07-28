import React,{useState} from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onLoginHandler = ()=>{
        const data = {
            email:email,
            password:password
        }
        axios.post('https://mywaysblogserver.herokuapp.com/api/user/login', data)
        .then((response) => {
            console.log(response.data);
            setEmail("");
            setPassword("");
            history.push("/MyWaysBlogs");
         })
         .catch((error) => console.log(error.response));
        console.log(data);
    }
    return (
        <div className="container mt-4">
            <h1 className="d-flex justify-content-center">Login</h1>
            <div className="col-md-6 m-auto">
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" 
                    placeholder="Email" 
                    value={email}
                    onChange={(event)=>{
                        setEmail(event.target.value);
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="examplePassword" 
                    placeholder="Password" 
                    value={password}
                    onChange={(event)=>{
                        setPassword(event.target.value);
                    }}/>
                </FormGroup>
                <Button className="col" onClick={onLoginHandler}>Submit</Button>
                <FormGroup className="d-flex justify-content-center mt-2">
                    <Link to="#" className="text-secondary">Forget Password?</Link>
                </FormGroup>
                <FormGroup className="d-flex justify-content-center mt-2">
                    <Label>Don't have an account yet?</Label>
                    <Link to="/MyWaysBlogs/register">Register?</Link>
                </FormGroup>
            </div>
        </div>
    )
}

export default Login
