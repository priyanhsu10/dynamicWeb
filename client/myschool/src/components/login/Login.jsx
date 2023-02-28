import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container login">
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <h1 className="left">Login to school</h1>
        </div>
        <div>
          <legend className="left">Select Organication</legend>
          <select
            className="form-control"
            {...register("org", { required: true })}
          >
            <option value="-1">-----select----</option>
            <option value="1">female</option>
            <option value="1">male</option>
            <option value="other">other</option>
          </select>
          {errors.org && (
            <span className="invalid">Organization is required</span>
          )}
        </div>
        <div>
          <legend className="left">User name</legend>
          <input
            className="form-control"
            defaultValue="test"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="invalid"> User name is required</span>
          )}
        </div>
        <div>
          <legend className="left">password</legend>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="invalid">password is required</span>
          )}
        </div>
        <div className="right">
          <input className="btn btn-secondary" type="submit" value="login" />
        </div>
        {/* include validation with required or other standard HTML validation rules */}

        {/* errors will return when field validation fails  */}
      </div>
    </form>
  );
};

export default Login;
