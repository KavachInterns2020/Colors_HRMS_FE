import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../static/Navbar";
import Footer from "../../static/Footer";
import crud from "../../../../images/crud.png";

export default class Em_page extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Navbar />

        <div className="app">
          <Link to="/logout">Logout</Link>
          <div class="container" style={{ marginLeft: "550px" }}>
            <div class="card">
              <Link to="/Record">
                <div class="face face1">
                  <div class="content">
                    <img src={crud} alt="logo" />
                    <h3>Leave Management</h3>
                  </div>
                </div>
              </Link>

              <div class="face face2">
                <div class="content">
                  <p style={{ color: "black" }}>
                    <small style={{ fontSize: "20px" }}>
                      You can apply and view the leaves here.
                    </small>
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
