import { SignUp } from "./SignUp";


export const LoginForm = () => {

    return (


        <>
              
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
                    <p>Don't have an account? <a href="/SignUp">Sign up here</a></p>

              </form>
        

        
        </>


    )


};