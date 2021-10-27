import React from "react";
import {Link} from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignin = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(
    submitForm,
    validate
  );

  return (
    <div className="container">
      <h1 className="title">Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label htmlFor="email">E-mail address</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Continue</button>
      </form>
      <p>
        Not our member yet?{" "}
        <Link to="/signup">Click here to create new account</Link>
      </p>
    </div>
  );
};

export default FormSignin;
