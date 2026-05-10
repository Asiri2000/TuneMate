import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                console.log("Login successful!");
                console.log(data);
                alert("Login successful!");
            } else {
                console.log("Login failed:", data.message);
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
        }
    };

    return (

        <>
         <h1 className="form-title">Welcome to TuneMate</h1>
        <div className="login-container">
           
            <form id="loginform" onSubmit={handleLogin} style={{ width: "100%" }}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-main">Login</button>
                <p>
                    Don't have an account? <Link to="/signup">Sign up here</Link>
                </p>
            </form>
        </div>
        </>
    );
}