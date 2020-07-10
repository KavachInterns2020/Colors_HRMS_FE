import React, { Component } from "react";
import axios from 'axios';

import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../../templates/Footer";
import Header from "../../templates/Header";

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee_id: "",
      token: localStorage.getItem('token')
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

    axios
      .get(`http://127.0.0.1:8000/employee/${employee_id}/delete/`, {
        headers: { "Authorization": `Token ${token}` },
      })
      .then((res) => {
        if(res.data.status === "success") {
          console.log("The Employee had removed");
          console.log(res.data);
        } else if(res.data.status === "failed") {
          console.log("no employee record or already deleted");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { employee_id } = this.state;
    return (
      <>
        <Navbar />
        <div className="app">
          <Link to="/logout">Logout</Link>
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
