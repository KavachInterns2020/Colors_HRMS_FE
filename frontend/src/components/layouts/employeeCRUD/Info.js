import React, { Component } from "react";
import axios from "axios";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
import Spinner from "../static/Spinner";

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
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      gender: "",
      date_of_birth: "",
      phone_number: "",
      door_no: "",
      street: "",
      area: "",
      state: "",
      pincode: "",
      department: "",
      token: token,
      isLoading: false,
      id_list: [],
      err_message: "",
    };

    axios
      .get(`http://127.0.0.1:8000/employee/list/employeeids/`, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        let data = res.data["data"];
        let lst = [];
        for (let i = 0; i < data.length; i++) {
          lst.push(data[i]["pk"]);
        }
        console.log(lst);
        this.setState({ id_list: lst });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChange = (e) => {
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
      gender: "",
      date_of_birth: "",
      phone_number: "",
      door_no: "",
      street: "",
      area: "",
      state: "",
      pincode: "",
      department: "",
      err_message: ""
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { token, employee_id } = this.state;
    console.log(token, employee_id);

    this.setState({ isLoading: true, err_message: "" }, () => {
      axios
        .get(`http://127.0.0.1:8000/employee/${employee_id}/`, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => {
          if (res.data.status === "success") {
            console.log(res.data.data);
            const data = res.data.data;
            this.setState(data);
          } else if (res.data.status === "failed") {
            this.setState({ err_message: res.data.err_message });
          }
          this.setState({ isLoading: false });
        })
        .catch((err) => {
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
      <div>
        {this.state.isLoading ? <Spinner /> : null}
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
          <Link to="/logout" className="sideview">
            Logout
          </Link>
          <div  className="form-group">
            <input
              type="text"
              placeholder="employee id"
              name="employee_id"
              className="form-control form-control-lg"
              list="datalist"
              autoComplete="off"
              value={this.state.employee_id}
              style={{ marginBottom: "4px" }}
              onChange={this.onChange}
            ></input>
            <datalist id="datalist">
              {this.state.id_list.map((id) => (
                <option value={id}></option>
              ))}
            </datalist>
            <button onClick={this.submitHandler} className="btn">Search</button>
            {this.state.err_message ? (
              <p className="err-text">{this.state.err_message}</p>
            ) : null}
          </div>

          <table id="customers">
            <tr>
              <td>Authentication ID</td>
              <td>{employee_id}</td>
            </tr>
            <tr>
              <td>Employee ID</td>
              <td>{employee_id}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{first_name}</td>
            </tr>
            <tr>
              <td>Middle Name</td>
              <td>{middle_name}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{last_name}</td>
            </tr>
            <tr>
              <td>Dob</td>
              <td>{date_of_birth}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{`${door_no}  ${street} ${area} ${state} ${pincode}`}</td>
            </tr>
            <tr>
              <td>Phone number</td>
              <td>{phone_number}</td>
            </tr>
            <tr>
              <td>Department</td>
              <td>{department}</td>
            </tr>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}
