import React, { Component } from "react";
import axios from "axios";

import Header from "../components/templates/Header";
import Navbar from "../components/layouts/static/Navbar";
import Footer from "../components/layouts/static/Footer";
import { Redirect } from "react-router-dom";
import Spinner from "../components/layouts/static/Spinner";

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
      isLoading: false,
      err_message: "",
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

    this.setState({ isLoading: true, err_message: "" }, () => {
      console.log(this.state.isLoading);
      axios
        .post("http://localhost:8000/rest-auth/login/", {
          username: this.state.username,
          password: this.state.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.key);
          this.setState({
            loggedIn: true,
            isLoading: false
          });
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err.response.status);
          this.setState({ isLoading: false });
          if(err.response.status>=400 && err.response.status<=403) {
            this.setState({err_message: "Invalid Credential"})
          }
        });
    });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/HR_page" />;
    }
    return (
      <>
        <Navbar />
        <div className="app login-form">
          {this.state.isLoading ? <Spinner /> : null}

          <Header />
          <div className="loginForm">
          <h2 className="login-header">Login as HR</h2>
            <form onSubmit={this.submitForm}>
              <input
                className="form-control form-control-lg"
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.Username}
                onChange={this.onChange}
                required
              />
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                required
              />
              <div>
                <p></p>
              </div>
              {
                this.state.err_message? <p className="err-text">{this.state.err_message}</p>: null
              }
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
