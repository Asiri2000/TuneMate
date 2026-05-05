
export const SignUp = () => {

    return(
     
        <>
                     
               <h1>Sign Up for TuneMate</h1>

               <form id="signupform">
                    
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" required />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" required />
                    <br />
                    <button type="submit">Sign Up</button>


                 </form>


        </>


    )


};