import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';


const ForgotPass = () => {

    const emailRef = useRef();
    const { resetPassord } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            setMessage('')
            await resetPassord(emailRef.current.value)
            setMessage('Check your email for further instructions')
            setTimeout(() => {
                navigate('/')
            }, 5000);
        } catch (error) {
            setError('Failed to reset Password ')
        }

        setLoading(false)
    }
    return (
        <>
            <div className='w-100' style={{ maxWidth: '400px' }}>

                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4 '>Reset Password</h2>
                        {error && <Alert variant='danger'> {error} </Alert>}
                        {message && <Alert variant='success'> {message} </Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='email'>
                                <Form.Label> Email </Form.Label>
                                <Form.Control type='email' ref={emailRef} required></Form.Control>
                            </Form.Group>
                            <Button disabled={loading} className='w-100 mt-4' type='submit'> Reset Password </Button>
                        </Form>
                        <div className='w-100 text-center mt-3'>
                            <Link to="/login"> Log In </Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2'>
                    Need an account? <Link to='/signup'> Sign Up </Link>
                </div>

            </div>

        </>
    )
}

export default ForgotPass