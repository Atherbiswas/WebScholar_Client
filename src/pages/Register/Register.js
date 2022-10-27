import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    //to get form data
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }
    return (
        <div className='container d-flex mt-3'>
            <Form onSubmit={handleRegister} className='form-container'>
            <h1 className='text-center'>Register Now!!</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter your email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your PhotoURL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Enter your photoUrl" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Enter your Password" required/>
            </Form.Group>
                <Button variant="warning" className='w-100 fs-5 fw-semibold' type="submit">
                    Register
                </Button>
                <p className='mt-2'>Already have an account?Please<Link to='/login'><span className='text-light'>Login</span> </Link> </p>
                <p className='text-danger'>{error}</p>
            </Form>
        </div>
    );
};

export default Register;