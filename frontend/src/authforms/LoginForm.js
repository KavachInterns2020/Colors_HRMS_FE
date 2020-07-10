import React, { Component } from "react";
import Header from "../components/templates/Header";
import Navbar from "../components/layouts/static/Navbar";
import Footer from "../components/templates/Footer";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;


    // VIGNESH WORK WITHOUT BE
    // if (username === "colors" && password === "123vignesh") {
    //   localStorage.setItem("token", "colorshrms");
    //   this.setState({
    //     loggedIn: true,
    //   });
    // }

    axios
      .post("http://localhost:8000/rest-auth/login/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res.data.key);
        localStorage.setItem("token", res.data.key);
        this.setState({
          loggedIn: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/HR_page" />;
    }

    return (
      <>
        <Navbar />
        <div className="app">
          <Header />
          <div className="loginForm">
            <form onSubmit={this.submitForm}>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.Username}
                onChange={this.onChange}
              />
              <input
                className="input"
                type="password"
                placeholder="ID"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />{" "}
              <div>
                <br />
              </div>
              <input className="btn  submitButton" type="submit" />
            </form>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default LoginForm;

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return { loggedin: (token) => dispatch(authLogin(token)) };
};

export default connect(null, mapDispatchToProps)(LoginForm);*/
