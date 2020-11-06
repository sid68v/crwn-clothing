import React, { Component } from "react";
import "./sign-up.styles.scss";

import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password does not match!");
      return;
    }

    signUpStart({ email, password, displayName});

    // this.setState({
    //   displayName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            required
            label="Display Name"
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            value={email}
            name="email"
            required
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            value={password}
            name="password"
            required
            label="Password"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            required
            label="Confirm Password"
            onChange={this.handleChange}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (signUpInfo) => dispatch(signUpStart(signUpInfo)),
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
