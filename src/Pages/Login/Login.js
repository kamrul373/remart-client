import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';
import { pageTitle } from '../../utility/pageTitle';

const Login = () => {
    // error state
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    // page title
    pageTitle("Login");
    // auth context
    const { login, loginWithGoogle, resetPassword } = useContext(AuthContext)
    // form process loading state
    const [customLoading, setCustomLoading] = useState(false);
    // login form event handler
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // login
        login(email, password)
            .then(result => {
                setCustomLoading(true)
                setError(null);

                fetch(`${process.env.REACT_APP_SERVER_URL}/jwt/${email}`)
                    .then(response => response.json())
                    .then(data => {
                        //console.log(data);
                        // token saving on localstorage

                        localStorage.setItem("remart-token", data.token)
                        form.reset();
                        toast.success("Successfully logged in");
                        setCustomLoading(false)
                    })

            }).catch(err => {
                setCustomLoading(true)
                setError(err.message)
                if (error) {
                    if (error.includes("auth/user-not-found")) {
                        toast.error("User not found !")

                    }
                    if (error.includes("auth/wrong-password")) {
                        toast.error("Email password mismatch")

                    }
                    if (error.includes("auth/too-many-requests")) {
                        toast.error("Please try later or reset your password!")
                    }
                }
                setCustomLoading(false)
            })
    }
    // login with google 
    const handleGoogleLogin = () => {
        loginWithGoogle().then(result => {
            const email = result.user.email;
            const user = {
                email: email,
                role: "buyer"
            }
            fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    // token saving on localstorage
                    localStorage.setItem("remart-token", data.token);

                })
        })
    }
    const handleForgotPass = (email) => {
        console.log(email)
        if (email) {
            resetPassword(email).then(() => {
                toast.success("Passwrod reset link sent in your email")
            }).catch(error => console.log(error))
        } else {
            toast.error("Please put email address")
        }
    }

    return (
        <div>
            <div className="hero lg:min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card lg:w-[450px] w-full shadow-2xl bg-base-100 lg:px-4 lg:pt-6 p-2">
                        <h1 className="lg:text-5xl text-3xl font-bold text-center">Login</h1>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label htmlFor='email' className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered" id='email' name='email' required />
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor='password'>
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" id='password' name='password' required />
                                    <label className="label">
                                        <span onClick={() => handleForgotPass(email)} className="label-text-alt link link-hover">Forgot password?</span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary"> {customLoading ? <span className="btn btn-circle bg-transparent loading"></span> : "Login"} </button>
                                </div>
                            </form>
                            <p className='text-center'>Don't have an account? <Link className='text-primary' to="/register">Create an account</Link> </p>
                            <div>
                                <div className="divider">OR</div>
                                <button onClick={handleGoogleLogin} className='btn btn-outline btn-primary w-full'>Login with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;