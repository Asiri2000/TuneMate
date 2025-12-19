import { useState } from "react";
import axios from 'axios';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send data to our Node server
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                alert("Account Created!");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="auth-form">
            <h2>Register</h2>
            <p className="subtitle">Create your account</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit" className="btn-primary">Create Account</button>
            </form>
        </div>
    );
}
export default Signup;