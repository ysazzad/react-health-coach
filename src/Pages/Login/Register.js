import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate("/login")
    }

    const formRegister = async (event) => {
        event.preventDefault()
        event.preventDefault()
        const name = event.target.formBasicName.value
        const email = event.target.formBasicEmail.value
        const password = event.target.formBasicPassword.value

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate("/home")

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto w-50'>
            <h1 className='text-center text-success'>Please Register</h1>
            <Form onSubmit={formRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setAgree(!agree)} label="Accept terms and condition" className={agree ? 'text-success' : 'text-danger'} />
                </Form.Group>
                <Button variant="success" type="submit" disabled={!agree}>
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-success pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;