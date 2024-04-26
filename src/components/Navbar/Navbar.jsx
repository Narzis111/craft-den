import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="navbar bg-base-100 items-center">
            <div className="navbar-start">
                <NavLink to="/">
                    <div className="flex items-center gap-1">
                        <img className="w-[50px]" src={logo} alt="" />
                        <h1 className="lg:text-xl text-xs text-blue-950 font-extrabold">C<span className="text-orange-600">raft</span><span className="text-orange-600 font-semibold">DEN</span></h1>
                    </div>
                </NavLink>
            </div>

            <div className="navbar-center hidden gap-2 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/craft">Craft Items</NavLink></li>
                    <li><NavLink to="/item/add">Add Crafts</NavLink></li>
                    <li><NavLink to="/myCart">My Art&Craft</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end items-center">
                {user?.email ? (
                    <div className="relative flex justify-between items-center">
                        <div
                            className="relative btn btn-ghost btn-circle avatar"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <img className="w-10 rounded-full cursor-pointer" src={user?.photoURL || "https://i.ibb.co/vQSpww7/user.png"} alt="user" />
                            
                            {showTooltip && (
                                <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 h-[48px] w-[200px] bg-blue-950 text-white border border-gray-200 shadow-md p-2 rounded">
                                    <div>{user.displayName}</div>
                                    <div>{user.email}</div>
                                </div>
                            )}
                        </div>
                        <button className="btn btn-sm text-white hover:text-black bg-red-600 ml-2" onClick={logOut}>Log Out</button>
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
