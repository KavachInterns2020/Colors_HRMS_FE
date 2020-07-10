import React, { Component } from "react";
import axios from 'axios';

import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../../templates/Footer";
import Header from "../../templates/Header";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee_id: "",
      first_name: "", 
      middle_name: "",
      last_name: "",
      email: "",
      gender: "male",
      date_of_birth: "",
      phone_number: "",
      door_no: "",
      street: "",
      area: "",
      state: "",
      pincode: "",
      department: "",
      token: localStorage.getItem('token')
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://127.0.0.1:8000/employee/create/`, {
        headers: { "Authorization": `Token ${this.state.token}`}, body: { "data":this.state },
      })
      .then((res) => {
        if(res.data.status === "success") {
          console.log("The Employee had updated");
          console.log(res.data);
        } else if(res.data.status === "failed") {
          console.log("no employee record");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {
      EmployeeId,
      firstname,
      middlename,
      lastname,
      email,
      gender,
      date,
      phoneno,
      doorno,
      street,
      area,
      state,
      pincode,
      department,
    } = this.state;

    return (
      <>
        <Navbar />
        <div className="app">
          <Link to="/logout">Logout</Link>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: "70px" }}>
            <div>
              <label>Employee id </label>
              <input
                type="text"
                name="employee_id"
                value={EmployeeId}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={firstname}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Middle Name</label>
              <input
                type="text"
                name="middle_name"
                value={middlename}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={lastname}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Gender</label>
              <select name="gender" value={gender} onChange={this.handleChange}>
                <option value="male">male</option>
                <option value="Female">Female</option>
                <option value="Between">Between</option>
              </select>
            </div>
            <div>
              <label>Dob </label>
              <input
                type="date"
                name="date_of_birth"
                value={date}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Phone no </label>
              <input
                type="text"
                name="phone_number"
                value={phoneno}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Door No </label>
              <input
                type="text"
                value={doorno}
                onChange={this.handleChange}
                name="door_no"
              />
            </div>
            <div>
              <label>Street </label>
              <input
                type="text"
                name="street"
                value={street}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Area </label>
              <input
                type="text"
                value={area}
                name="area"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>State </label>
              <input
                type="text"
                value={state}
                name="state"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Pin code </label>
              <input
                type="text"
                value={pincode}
                name="pincode"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Department </label>
              <input
                type="text"
                value={department}
                name="department"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Add;
