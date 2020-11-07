import React, { useState } from "react";
import "./sign-up.styles.scss";

import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match!");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={displayName}
          name="displayName"
          required
          label="Display Name"
          onChange={handleChange}
        />
        <FormInput
          type="email"
          value={email}
          name="email"
          required
          label="Email"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          required
          label="Password"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          required
          label="Confirm Password"
          onChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (signUpInfo) => dispatch(signUpStart(signUpInfo)),
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
