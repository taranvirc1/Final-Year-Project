import React, {useState} from 'react';
import{useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


const handleCreateAccount = () => {
    navigate('/create-account');
};

const handleLogin = () => {
   axios.post('http://localhost:8080/api/users/login' , {username,password})
   .then(response =>{
    console.log('Login successful:');
    navigate.push('/');
   })
   .catch(error => {
    console.error('Login failed:');
   });
};


    return(
        <div>
            <br />
            <form className="account-form">
                <h2>Login</h2>
                <label className="label">
                    Username:
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label className="label">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <br />
                <button type="button" onClick={handleCreateAccount}>
                    Create Account
                </button>
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );


};

export default Login;