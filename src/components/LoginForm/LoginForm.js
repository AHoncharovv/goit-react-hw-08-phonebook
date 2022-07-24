import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

export default function LoginForm() {

  const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onSubmit = event => {
        event.preventDefault();
        dispatch(authOperations.logIn(user))
        
        setUser({
            email: '',
            password: '',
        });
    }

    const onChange = event => {
        setUser(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

  return (
    <Form onSubmit={onSubmit}>
  
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name='email' value={user.email} onChange={onChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={onChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};