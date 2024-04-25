import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);

return (
        <div className="navbar bg-base-100 items-center">

            <div className="navbar-start">
                <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    
                    <ul tabIndex={0} className=" bg-blue-400 z-30 menu menu-sm dropdown-content -mt-3 shadow rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        
                        <li><NavLink to="/update">Update Profile</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/">
                    <div className="flex items-center gap-1" >
                        <img className="w-[50px]" src={logo} alt="" />
                        <h1 className="lg:text-xl text-xs text-blue-950 font-extrabold">C<span className="text-orange-600"></span>raft<span className="text-orange-600 font-semibold">DEN</span></h1>
                    </div>
                </NavLink>
            </div>

            <div className="navbar-center hidden gap-2 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/craft">Craft Items</NavLink></li>
                    <li><NavLink to="/artcraft">Art & Craft Categories</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    
                </ul>
            </div>

           

            <div className="navbar-end items-center">
            
                {user?.email ? (
                    <div className="relative flex justify-between items-center">
                        <div
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <div className="w-10 rounded-full">
                                <img className="cursor-pointer" src={user?.photoURL || "https://i.ibb.co/vQSpww7/user.png"} alt="user" />
                            </div>
                        </div>
                        <button className="btn btn-sm text-white hover:text-black bg-red-600 mr-1" onClick={logOut}>Log Out</button>
                        
                        {showDropdown && (
                            <div className="absolute top-full right-12 -mt-7 border-2 border-orange-500 bg-white rounded shadow-md p-2 z-10" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                                <span className="text-gray-600">{user.displayName}</span> <br />
                                <span className="text-gray-600">{user.email}</span>
                                {/* <button className="btn btn-sm text-white hover:text-black bg-red-600" onClick={logOut}>Log Out</button> */}
                            </div>
                            
                        )}
                    </div>
                ) : (
                    <Link to='/login'>
                        <button className="btn btn-sm btn-ghost">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;