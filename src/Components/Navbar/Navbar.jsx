
import { NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Authprovider/AuthProvider';
import Swal from 'sweetalert2'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navlink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addproducts'}>Add Product</NavLink></li>
        <li><NavLink to={'/cart'}>My Cart</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
    </>
    const handleLogOut = () => {
        logOut(auth)
            .then(
                Swal.fire({
                    title: "Good job!",
                    text: "Logout Successfully!",
                    icon: "success"
                })
            )
            .then(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className='text-orange-400'>MK's</span> <span className='text-green-400'>Automotive</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <><p>{user.email}</p>  <button onClick={handleLogOut} className='btn btn-primary'>Logout</button></>
                            :
                            <NavLink to={'/login'}><a className='btn'>Login</a></NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
