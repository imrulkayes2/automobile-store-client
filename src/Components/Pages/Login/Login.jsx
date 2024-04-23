import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Firebase/Authprovider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const loacation = useLocation();
    console.log(loacation);
    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "LogIn Successfully!",
                    icon: "success"
                })
                // Navigate after logIn
                navigate(loacation?.state ? location.state : '/');
            })
            .then(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p>New User? Please <Link to={'/register'}><span className='text-red-400 font-bold'>Register</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;