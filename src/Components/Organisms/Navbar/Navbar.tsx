import useAuth from "@src/Hooks/useAuth";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { auth, onLogout } = useAuth();
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {auth === null ? (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      ) : (
        <>
          <div>{auth.name}</div>
          <button type="button" onClick={() => onLogout()}>
            Logout
          </button>
        </>
      )}
    </>
  );
};

export default Navbar;
