import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "./static/Navbar";
import Footer from "../templates/Footer";
import timesheet1 from "../../images/timesheet1.jpg";
import performance from "../../images/performance.jpg";
import crud from "../../images/crud.png";

export default class HR_page extends Component {
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
          <div class="container">
            <div class="card">
              <Link to="/Options">
                <div class="face face1">
                  <div class="content">
                    <img src={crud} alt="logo" />
                    <h3>Crud operation</h3>
                  </div>
                </div>
              </Link>

              <div class="face face2">
                <div class="content">
                  <p style={{ color: "black" }}>
                    <small style={{ fontSize: "20px" }}>
                      This feature is for adding deleting updating employee
                      details
                    </small>
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <img src={performance} alt="logo" />
                  <h3>Performance Analysis</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p style={{ color: "black" }}>
                    <small style={{ fontSize: "20px" }}>
                      This feature is for analysing the performance of an
                      employee
                    </small>
                  </p>

                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <img src={timesheet1} alt="logo" />
                  <h3>Emp Management</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p style={{ color: "black" }}>
                    <small style={{ fontSize: "20px" }}>
                      This feature is for manageing the employee details in a
                      structured manner
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
