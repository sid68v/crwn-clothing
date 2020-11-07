import React, { Component, useState } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { email, password } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="Email"
          type="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            signInWithGoogle
          >
            Sign In With Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })),
  };
};

export default connect(null, mapDispatchtoProps)(SignIn);
