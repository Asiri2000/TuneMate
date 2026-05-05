import { Link } from "react-router-dom";


export default function LoginForm() {

    return (


        <>
              <div className="login-container">

              <h1>Welcome to TuneMate</h1>

              <form id="loginform">

                 <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" required />
                    <br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" required />
                    <br />

                    <button type="submit">Login</button>

                    <br />
                    <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>

              </form>

              </div>
        

        
        </>


    )


};