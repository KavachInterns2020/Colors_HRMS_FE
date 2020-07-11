import React, { Component } from "react";
import axios from "axios";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../../templates/Footer";
import Header from "../../templates/Header";
import Spinner from "../static/Spinner";

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
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ isLoading: true }, () => {
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
            console.log("no employee record");
            alert("Error! something went wrong please check the form")
          }

        })
        .catch((err) => {
          console.log(err);
          alert("Error! server hanged")
        });
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2000)
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
      date_of_birth ,
      phone_number,
      door_no,
      street,
      area,
      state,
      pincode,
      department
    } = this.state;


    return (
      <>
        {this.state.isLoading ? <Spinner /> : null}
        <Navbar />
        <div className="app crud-form">
          <Link to="/logout" className="sideview">Logout</Link>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: "70px" }}>
            <div>
              <label>Employee id </label>
              <input
                type="text"
                name="employee_id"
                value={employee_id}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Middle Name</label>
              <input
                type="text"
                name="middle_name"
                value={middle_name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select name="gender" value={gender} onChange={this.handleChange} >
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
                value={date_of_birth}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Phone no </label>
              <input
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Door No </label>
              <input
                type="text"
                name="door_no"
                value={door_no}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Street </label>
              <input
                type="text"
                name="street"
                value={street}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Area </label>
              <input
                type="text"
                value={area}
                name="area"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>State </label>
              <input
                type="text"
                value={state}
                name="state"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Pin code </label>
              <input
                type="text"
                value={pincode}
                name="pincode"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Department </label>
              <input
                type="text"
                value={department}
                name="department"
                onChange={this.handleChange}
                required
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
