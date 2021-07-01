
import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';

const LoginForm = (props)=>{

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control 
                    onChange={(e)=>{setLogin(e.target.value)}}
                type="text" placeholder="Enter Login" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password" placeholder="Password" />
            </Form.Group>

            <Button onClick={()=>{props.login(login,password)}}>Login</Button>
        </Form>
    )
}

export default LoginForm