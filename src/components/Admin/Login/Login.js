import React, { useState } from 'react'
import MyNavbar from '../../NavBar/MyNavbar'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import alertify from 'alertifyjs';
const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onClickHandler = () => {
        axios.post('https://mywaysblogserver.herokuapp.com/api/admin/login', {email,password}) 
        .then((response) => {
            setEmail("");
            setPassword("");
            localStorage.setItem("admin", JSON.stringify(response.data));
            alertify.success('Succefully Logged In');
            history.push("/mywaysblog/admin/home");
        })
        .catch((error) => {
            alertify.warning(error.response.data.message);
        });
    }
    return (
        <>
            <MyNavbar />
            <div className="container mt-4">
                <h1 className="d-flex justify-content-center">Admin Login</h1>
                <div className="col-md-6 m-auto">
                    <Form>
                        <FormGroup>
                            <Input type="Email" name="Email" Email="Email"
                                placeholder="Email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" Email="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <Button className="col" onClick={onClickHandler}>Login</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login
