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
      token: localStorage.getItem('token'),
      err_message: ""
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
    this.setState({ isLoading: true, err_message: "" }, () => {
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
    const { leave_type, leave_description, total_days } = this.state;

    return (
      <div>
        {this.state.isLoading ? <Spinner /> : null}
        <Navbar />
        <div className="app">
          <Link to="/logout">Logout</Link>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: "70px" }}>
            <div className="form-group">
              <label>Leave Type</label>
              <input
                type="text"
                name="leave_type"
                className="form-control form-control-lg"
                value={leave_type}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Leave Type Description</label>
              <textarea
                rows="3"
                name="leave_description"
                className="form-control form-control-lg"
                value={leave_description}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Total Days Allowed</label>
              <input
                type="text"
                name="total_days"
                className="form-control form-control-lg"
                value={total_days}
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
      </div>
    );
  }
}
