import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
    return (
        <div className='container d-flex mt-5'>
            <Form className='form-container'>
            <h1 className='text-center'>Login Now!!</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="name" type="email" placeholder="Enter your email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Enter your Password" required/>
            </Form.Group>
                <Button variant="warning" className='w-100 fs-5 fw-semibold' type="submit">
                    Login
                </Button>
                <p className='mt-2'>Don't have account?Please<Link to='/register'><span className='text-light'>Register</span> </Link> </p>
                <hr />
                <Button variant="warning" className='w-100 mb-2 fs-5 fw-semibold' type="submit">
                    <FaGoogle></FaGoogle> Login with Google account
                </Button>
                <Button variant="warning" className='w-100 fs-5 fw-semibold' type="submit">
                    <FaGithub></FaGithub> Login with Github account
                </Button>
            </Form>
        </div>
    );
};

export default Login;