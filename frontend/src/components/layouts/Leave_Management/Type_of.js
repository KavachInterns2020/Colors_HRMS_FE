import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
import Spinner from "../static/Spinner";

export default class Type_of extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leave_type: "",
      leave_description: "",
      total_days: "",
      isLoading: false,
      token: localStorage.getItem('token')
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetHandler = () => {
    this.setState({
      leave_type: "",
      leave_description: "",
      total_days: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ isLoading: true }, () => {
      axios
        .post(
          `http://localhost:8000/leave/create/`,
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
            alert("Error! something went wrong please check the form");
          }
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log(err);
          alert("Error! server hanged");
          this.setState({ isLoading: false });
        });
    });
  };

  render() {
    const { leave_type, leave_description, total_days } = this.state;

    return (
      <div>
        {this.state.isLoading ? <Spinner /> : null}
        <Navbar />
        <div className="app">
          <Link to="/logout">Logout</Link>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: "70px" }}>
            <div>
              <label>Leave Type</label>
              <input
                type="text"
                name="leave_type"
                value={leave_type}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <br />
              <br />
              <label>Leave Type Description</label>
              <textarea
                rows="4"
                cols="50"
                name="leave_description"
                value={leave_description}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Total Days Allowed</label>
              <input
                type="text"
                name="total_days"
                value={total_days}
                onChange={this.handleChange}
                required
              />
            </div>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
