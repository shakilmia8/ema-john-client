import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { setUser, setError, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            }).catch(error => {
                setError(error.message);
            });
    }

    return (
        <div className="login-page">
            <div>
                <h2>Please Login</h2>
                <form>
                    <input type="text" name="email" placeholder='Your E-mail' />
                    <br />
                    <input type="password" name="password" placeholder='Your password' />
                    <br />
                    <input type="submit" value="Login" />
                    <br />
                </form>
                <div>----------or----------</div>
                <button onClick={handleGoogleSignIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;