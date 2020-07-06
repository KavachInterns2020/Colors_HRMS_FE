import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
// import UserStore from "./Stores/UserStores";

import axios from "axios";
import { connect } from "react-redux";
import { authLogin } from "./Actions/authActions";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonDisabled: false,
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val,
    });
  }
  resetForm() {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
  }

  async doLogin() {
    console.log("HI");

    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true,
    });

    try {
      axios
        .post("http://localhost:8000/rest-auth/login/", {
          username: this.state.username,
          password: this.state.password,
        })
        .then((res) => {
          if (res.data.key != null) {
            this.props.loggedin(res.data.key);
          } else {
            console.log("no record match");
          }
        })
        .catch((err) => {
          console.log("Invalid user name password");
        });
    } catch (e) {
      console.log(e);
      this.resetForm();
    }
  }

  render() {
    return (
      <div className="loginForm">
        <h3>Login</h3>
        <InputField
          type="text"
          placeholder="Username"
          value={this.state.username ? this.state.username : ""}
          onChange={(val) => this.setInputValue("username", val)}
        />
        <InputField
          type="password"
          placeholder="ID"
          value={this.state.password ? this.state.password : ""}
          onChange={(val) => this.setInputValue("password", val)}
        />
        <SubmitButton
          text="Login"
          disabled={this.state.buttonDisabled}
          onClick={() => this.doLogin()}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { loggedin: (token) => dispatch(authLogin(token)) };
};

export default connect(null, mapDispatchToProps)(LoginForm);
