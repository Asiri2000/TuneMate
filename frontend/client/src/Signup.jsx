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
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Signup;