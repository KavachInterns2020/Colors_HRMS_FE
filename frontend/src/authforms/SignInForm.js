import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "../components/templates/Header";
import Navbar from "../components/layouts/static/Navbar";
import Footer from "../components/layouts/static/Footer";



class SignInForm extends React.Component {
  constructor(props) {
    super(props);
  

    
    this.state = {
      username: "",
      password: "",
   
     
    };

   
  }

  onChange=(e)=> {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /*submitForm(e) {
    e.preventDefault();
      const { username, password } = this.state;

    this.setState({ isLoading: true }, () => {
      console.log(this.state.isLoading);
      axios
        .post("****", {
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
          console.log(err);
          this.setState({ isLoading: false }, () => {
            alert("Invalid username or password");
          });
        });
    });
  }*/

  render()
  
  {
    if (this.state.loggedIn) {
      return <Redirect to="/HR_page" />;
    }
    return (
      <>
        <Navbar />
        <div className="app login-form">
    

          <Header />
          <div className="loginForm">
            <form onSubmit={this.submitForm}>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Employee name"
                value={this.state.Username}
                onChange={this.onChange}
              />
              <input
                className="input"
                type="password"
                placeholder="Employee ID"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <div>
                <br />
              </div>
              <Link to="Em_page">
              <input className="btn  submitButton" type="submit" />
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

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return { loggedin: (token) => dispatch(authLogin(token)) };
};

export default connect(null, mapDispatchToProps)(LoginForm);*/
