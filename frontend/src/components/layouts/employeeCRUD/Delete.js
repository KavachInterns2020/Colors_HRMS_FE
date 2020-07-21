import React, { Component } from "react";
import axios from "axios";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
import Header from "../../templates/Header";
import Spinner from "../static/Spinner";

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee_id: "",
      token: localStorage.getItem("token"),
      isLoading: false,
      id_list: [],
      err_message:""
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

  handleIdChange = (event) => {
    this.setState({
      employee_id: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { token, employee_id } = this.state;
    console.log(token, employee_id);

    this.setState({ isLoading: true, err_message: "" }, () => {

      axios
        .get(`http://127.0.0.1:8000/employee/${employee_id}/delete/`, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => {
          if (res.data.status === "success") {
            this.setState({ employee_id: "" });
          } else if (res.data.status === "failed") {
            this.setState({err_message: "No employee rercord found"})
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
    const { employee_id } = this.state;
    return (
      <>
        {this.state.isLoading ? <Spinner /> : null}
        <Navbar />
        <div className="app crud-form">
          <Link to="/logout" className="sideview">
            Logout
          </Link>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Employee id </label>
              <input
                type="text"
                name="employee_id"
                value={employee_id}
                list="datalist"
                autoComplete="off"
                className="form-control form-control-lg"
                onChange={this.handleIdChange}
              />
              <datalist id="datalist">
                {this.state.id_list.map(id => (
                  <option value={id}></option>
                ))}
              </datalist>
            </div>
            {this.state.err_message ? (
              <p className="err-text">{this.state.err_message}</p>
            ) : null}

            <button type="submit" className="btn btn-primary btn-lg btn-block">Delete</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Delete;
