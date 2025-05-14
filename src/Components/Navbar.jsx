import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  logoutUser } from "../Features/auth/authSlice"; 

const Navbar = () => {
  const user = useSelector((state) => state.auth?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-white text-2xl font-bold">MyApp</Link>
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span className="text-white hidden sm:inline">Hi, {user.name || user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
