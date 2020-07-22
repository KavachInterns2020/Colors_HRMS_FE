import React, { Component } from "react";
import axios from "axios";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
import Header from "../../templates/Header";
import Spinner from "../static/Spinner";
import  DatePicker  from 'react-datepicker';

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
      token: localStorage.getItem("token"),
      isLoading: false,
      err_message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetHandler = () => {
    this.setState({
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
      err_message: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ isLoading: true, err_message: "" }, () => {
      axios
        .post(
          `http://127.0.0.1:8000/employee/create/`,
          { body: { data: this.state } },
          {
            headers: { Authorization: `Token ${this.state.token}` },
          }
        )
        .then((res) => {
          if (res.data.status === "success") {
            console.log(res.data);
            this.resetHandler();
          } else if (res.data.status === "failed") {
            this.setState({ err_message: res.data.err_message });
          }
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err.response.status);
          this.setState({ isLoading: false });
          if (err.response.status >= 400 && err.response.status <= 403) {
            this.setState({ err_message: "Request Denied" });
          } else if (err.response.status == 404) {
            this.setState({
              err_message: "Request not found, unknown request",
            });
          } else if (err.response.status == 500) {
            this.setState({
              err_message: "Server error, try later or inform developer...",
            });
          }
        });
    });
  };

  render() {
    const {
      employee_id,
      first_name,
      middle_name,
      last_name,
      email,
      gender,
      date_of_birth,
      phone_number,
      door_no,
      street,
      area,
      state,
      pincode,
      department,
    } = this.state;

    return (
      <>
        {this.state.isLoading ? <Spinner /> : null}
        <Navbar />
        <div className="app crud-form">
          <h2 className="display-4 text-primary font-weight-normal m-3">Add Employee</h2>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: "70px" }}>
            
            <div className="form-group">
              <label>Employee id </label>
              <input
                type="text"
                name="employee_id"
                className="form-control form-control-lg"
                value={employee_id}
                aria-describedby="emailHelp"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={first_name}
                className="form-control form-control-lg"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Middle Name</label>
              <input
                type="text"
                name="middle_name"
                className="form-control form-control-lg"
                value={middle_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                className="form-control form-control-lg"
                value={last_name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control form-control-lg"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={gender} onChange={this.handleChange} className="form-control form-control-lg">
                <option value="male">male</option>
                <option value="Female">Female</option>
                <option value="Between">Between</option>
              </select>
            </div>
            <div className="form-group">
              <label>Dob </label>
              <input
                type="date"
                name="date_of_birth"
                className="form-control form-control-lg"
                value={date_of_birth}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone no </label>
              <input
                type="text"
                name="phone_number"
                className="form-control form-control-lg"
                value={phone_number}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Door No </label>
              <input
                type="text"
                name="door_no"
                className="form-control form-control-lg"
                value={door_no}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Street </label>
              <input
                type="text"
                name="street"
                className="form-control form-control-lg"
                value={street}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Area </label>
              <input
                type="text"
                value={area}
                name="area"
                className="form-control form-control-lg"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>State </label>
              <input
                type="text"
                value={state}
                name="state"
                className="form-control form-control-lg"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Pin code </label>
              <input
                type="text"
                value={pincode}
                name="pincode"
                className="form-control form-control-lg"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Department </label>
              <input
                type="text"
                value={department}
                name="department"
                id="exampleFormControlInput1"
                className="form-control form-control-lg"
                onChange={this.handleChange}
                required
              />
            </div>
            {this.state.err_message ? (
              <p className="err-text">{this.state.err_message}</p>
            ) : null}
            <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Add;
