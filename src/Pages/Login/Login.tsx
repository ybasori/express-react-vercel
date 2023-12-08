import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "@src/Hooks/useAuth";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

interface IFormInput {
  name: string;
}

const Login = () => {
  const { onLogin } = useAuth();
  const navigate = useNavigate();
  const [isRemember, setIsRemember] = useState(false);

  const schema = yup
    .object({
      name: yup.string().required().label("Name"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    onLogin({ name: data.name, token: "abc" }, isRemember);
    toast.success("hello");
    navigate("/");
  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <input
              id="name"
              type="text"
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              autoComplete="off"
            />
          )}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="remember">Remember me</label>
        <input
          id="remember"
          type="checkbox"
          checked={isRemember}
          onChange={() => setIsRemember(!isRemember)}
        />
        <button type="submit">Login</button>
        <NavLink to="/register">Don&apos;t have account?</NavLink>
      </form>
    </>
  );
};

export default Login;
