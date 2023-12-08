import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Already have account?</NavLink>
    </>
  );
};

export default Register;
