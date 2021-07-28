import React, { useState } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import alertify from "alertifyjs";
import MyNavbar from '../../NavBar/MyNavbar';
const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailFlag, setEmailFlag] = useState(false);
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const onLoginHandler = () => {
        const data = {
            email: email,
            password: password
        }
        if (emailFlag) {
            axios.post('https://mywaysblogserver.herokuapp.com/api/user/login', data)
                .then((response) => {
                    setEmail("");
                    setPassword("");
                    localStorage.setItem("user", JSON.stringify(response.data));
                    history.push("/mywaysblog");
                })
                .catch((error) => {
                    console.log(error.response);
                    alertify.warning(error.response.data.message);
                });
        }
        else {
            alertify.warning("Enter Valid Data")
        }
    }
    return (
        <>
            <MyNavbar />
            <div className="container mt-4">
                <h1 className="d-flex justify-content-center">Login</h1>
                <div className="col-md-6 m-auto">
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                                if (validateEmail(event.target.value)) {
                                    event.target.style.color = "black";
                                    setEmailFlag(true);
                                }
                                else {
                                    event.target.style.color = "red";
                                    setEmailFlag(false);
                                }
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="examplePassword"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }} />
                    </FormGroup>
                    <Button className="col" onClick={onLoginHandler}>Submit</Button>
                    <FormGroup className="d-flex justify-content-center mt-2">
                        <Link to="#" className="text-secondary">Forget Password?</Link>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-center mt-2">
                        <Label>Don't have an account yet?</Label>
                        <Link to="/mywaysblog/register">Register?</Link>
                    </FormGroup>
                </div>
            </div>
        </>
    )
}

export default Login
