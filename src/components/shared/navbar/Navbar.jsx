import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm border-b-gray-600" >
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl"><span className='font-bold'>Buddy</span>Tracker</a>
      </div> 
      <div className="navbar-end gap-2">
        <NavLink 
          to="/"
          className={({isActive}) =>
          isActive ? "flex items-center border rounded-md p-2 bg-green-800 text-white gap-1" : "flex items-center bg-white text-gray-600 gap-1"
          }
        >
          <IoHomeOutline />Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({isActive}) =>
          isActive ? "flex items-center border rounded-md p-2 bg-green-800 text-white gap-1" : "flex items-center bg-white text-gray-600 gap-1"
          }
        >
          <MdOutlineWatchLater />Timeline
        </NavLink>

        <NavLink
          to="/analytics"
          className={({isActive}) =>
          isActive ? "flex items-center border rounded-md p-2 bg-green-800 text-white gap-1" : "flex items-center bg-white text-gray-600 gap-1"
          }
        >
          <ImStatsDots />Analytics
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;