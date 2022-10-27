import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser, updateUserProfile, userEmailVerify} = useContext(AuthContext);

    const navigate = useNavigate()
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
            setError('');
            form.reset();
            handleupdateUserProfile(name, photoURL);
            emailVerification();
            toast.success('Registration successfull! We sent a verification mail.Please verify your email address.')
            navigate('/');
        })
        .catch(error => {
            console.error(error);
            setError(toast.error(error.message));
        })
    }

    const handleupdateUserProfile =(name, photoURL) => {
        const profile= {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then( () => {})
        .catch(error => console.error(error))

    }

    const emailVerification = () => {
        userEmailVerify()
        .then( () => {})
        .catch(error => console.error(error))
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
            </Form>
        </div>
    );
};

export default Register;