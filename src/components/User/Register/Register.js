import React,{useState} from 'react'
import { Button, FormGroup, Input,Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
const Register = ({ history }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const onClickHandler = ()=>{
        if(fullName.trim().length===0||
            email.trim().length===0||
            contact.trim().length===0||
            password.trim().length===0){
                return
        }
        const data = {
            fullName : fullName,
            email: email,
            contact: contact,
            password:password,
        }
        axios.post('https://mywaysblogserver.herokuapp.com/api/user/register', data)
        .then((response) => {
            console.log(response.data);
            setEmail("");
            setPassword("");
            setContact("");
            setConfirmPassword("");
            setFullName("");
            history.push("/mywaysblog/login");
         })
         .catch((error) => console.log(error.response));
        console.log(data);
    }
    return (
        <div>
            <div className="container mt-4">
            <h1 className="d-flex justify-content-center">Register</h1>
            <div className="col-md-6 m-auto">
                <FormGroup>
                    <Input type="text" name="name" id="name" 
                    placeholder="Full Name" 
                    value={fullName}
                    onChange={(event)=>{
                        setFullName(event.target.value);
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" id="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(event)=>{
                        setEmail(event.target.value);
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Input type="number" name="contact" id="contact" 
                    placeholder="Phone Number"
                    value={contact}
                    onChange={(event)=>{
                        setContact(event.target.value);
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(event)=>{
                        setPassword(event.target.value);
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="conformPassword" id="conformPassword" 
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={(event)=>{
                        setConfirmPassword(event.target.value);
                    }}
                    />
                </FormGroup>
                <FormGroup className="d-flex justify-content-center mt-2">
                    <Label>By registering, you agree to the&nbsp;</Label>
                    <Link to="#" className="text-secondary">Terms & Condition</Link>
                    <Label>&nbsp;and&nbsp;</Label>
                    <Link to="#" className="text-secondary">Privacy Policy</Link>
                </FormGroup>
                <Button className="col" onClick={onClickHandler}>Submit</Button>
                <FormGroup className="d-flex justify-content-center mt-2">
                    <Label>Already have account?</Label>
                    <Link to="/mywaysblog/login">Login?</Link>
                </FormGroup>
            </div>
        </div>
    </div>
    )
}

export default Register
