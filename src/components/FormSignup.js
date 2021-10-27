import React from "react";
import {Link} from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(
    submitForm,
    validate
  );

  return (
    <div className="container">
      <h1 className="title">Sign up</h1>
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
          <label htmlFor="username">Full name</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
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
        <div className="form-inputs">
          <label htmlFor="password">Confirm your password</label>
          <input
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="" type="submit">
          Continue
        </button>
      </form>
      <p>
        Already using our app? <Link to="/"> Click here to sign in</Link>
      </p>
    </div>
  );
};

export default FormSignup;
