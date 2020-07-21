import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "../components/templates/Header";
import Navbar from "../components/layouts/static/Navbar";
import Footer from "../components/layouts/static/Footer";
import Spinner from "../components/layouts/static/Spinner";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoading: false,
      err_message: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    this.setState({ isLoading: true }, () => {
      console.log(this.state.isLoading);
      axios
        .post("http://localhost:8000/rest-auth/login/", {
          username: this.state.username,
          password: this.state.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.key);
          localStorage.setItem("username", this.state.username);
          this.setState({
            loggedIn: true,
            isLoading: false,
          });
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          if(err.response.status>=400 && err.response.status<=403) {
            this.setState({err_message: "Invalid Credential"})
          }
        });
    });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/Em_page" />;
    }
    return (
      <>
      {this.state.isLoading ? <Spinner /> : null}
        <Navbar />
        <div className="app login-form">
          <Header />
          <div className="loginForm">
            <form onSubmit={this.submitForm}>
              <input
                className="input"
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Employee name"
                value={this.state.Username}
                onChange={this.onChange}
                required
              />
              <input
                className="input"
                type="password"
                placeholder="Employee ID"
                autoComplete="off"
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
              <Link to="/Em_page">
                <input className="btn  submitButton" type="submit" onClick={this.submitForm} />
              </Link>
            </form>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default SignInForm;
