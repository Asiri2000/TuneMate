import { useState } from "react";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if(result.data === "Success") {
                    alert("Login Successful!");
                } else {
                    alert("Login Failed");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <p className="subtitle">Welcome back!</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Sign In</button>
            </form>
        </div>
    );
}
export default Login;