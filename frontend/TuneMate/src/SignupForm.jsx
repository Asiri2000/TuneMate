import React from 'react';

const handleRegister = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
};


const SignupForm = () => {
    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form method="POST" onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;