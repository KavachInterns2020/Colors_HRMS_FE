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
    };
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

    this.setState({ isLoading: true }, () => {
      axios
        .get(`http://127.0.0.1:8000/employee/${employee_id}/delete/`, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => {
          if (res.data.status === "success") {
            console.log("The Employee had removed");
            console.log(res.data);
            this.setState({ employee_id: "" });
            alert("Employee record removed");
          } else if (res.data.status === "failed") {
            alert("No employee record");
          }
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log(err);
          alert("Server Error");
          this.setState({ isLoading: false });
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
          
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Employee id </label>
              <input
                type="text"
                name="employee_id"
                value={employee_id}
                onChange={this.handleIdChange}
              />
            </div>

            <button type="submit">Delete</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Delete;
