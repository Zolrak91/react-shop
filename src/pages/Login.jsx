import React, { useRef } from 'react';
import Layout from '@containers/Layout';
import Header from '@components/Header';
import '@styles/Login.scss';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        };
    };

    return (
        <Layout>
            <Header/>
            <div className="login">
                <div className="form-container">
                    <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                    <form action="/" className="form" ref={form}>
                        <label htmlFor="email" className="label">Email address</label>
                        <input type="text" name="email" placeholder="platzi@example.com" className="input input-email"/>
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name="password" placeholder="*********" className="input input-password"/>
                        <button className="primary-button login-button" onClick={handleSubmit}>Log in</button>
                        <a href="/">Forgot my password</a>
                    </form>            
                    <button className="secondary-button signup-button">Sign up</button>
                </div>
            </div>
        </Layout>
    );
}

export default Login;