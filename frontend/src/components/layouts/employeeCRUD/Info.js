import React, { Component } from "react";
import axios from "axios";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../../templates/Footer";

export default class Info extends Component {
  constructor(props) {
    super(props);

    let token = "";
    try {
      token = localStorage.getItem("token");
    } catch (err) {
      token = "";
    }

    this.state = {
      employee_id: "",
      token: token,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { token, employee_id } = this.state;
    console.log(token, employee_id);

    axios
      .get(`http://127.0.0.1:8000/employee/${employee_id}/`, {
        headers: { "Authorization": `Token ${token}` },
      })
      .then((res) => {
        if(res.data.status === "success") {
          console.log("The enty found");
          console.log(res.data.data);
        } else if(res.data.status === "failed") {
          console.log("No entry found");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div
          className="app"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "30px",
            marginBottom: "40px",
          }}
        >
          <Link to="/logout">Logout</Link>
          <div className="topnav">
            <input
              type="text"
              placeholder="employee id"
              name="employee_id"
              value={this.state.employee_id}
              style={{ marginBottom: "4px" }}
              onChange={this.onChange}
            ></input>
            <button onClick={this.submitHandler}>Search</button>
          </div>

          <table id="customers">
            <tr>
              <td>Authentication ID</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Employee ID</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Dob</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Phone number</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>Department</td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}
