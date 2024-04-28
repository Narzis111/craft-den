import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [showTooltip, setShowTooltip] = useState(false);
    const [theme, setTheme] = useState('light');

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('synthwave')
    } else {
      setTheme('light')
    }
  }
    useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

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
                    <li><NavLink to="/item/table">All Art & Craft Items</NavLink></li>
                    <li><NavLink to="/item/add">Add Craft Item</NavLink></li>
                    <li><NavLink to="/myCart">My Art&Craft List</NavLink></li>
                    
                </ul>
                <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
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
