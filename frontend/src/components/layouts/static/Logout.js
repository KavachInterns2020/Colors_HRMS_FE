import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Logout extends Component {
  constructor(props) {
    super(props);

    // VIGNESH WORK
    // localStorage.removeItem("token");

    axios
      .post("http://127.0.0.1:8000/rest-auth/logout/")
      .then((res) => {
        localStorage.removeItem("token");
      })
      .catch((err) => {
        console.log("logout failed");
      });
  }
  render() {
    return (
      <div>
        <h1>You have been logged out</h1>
        <Link to="/">Login again</Link>
      </div>
    );
  }
}
