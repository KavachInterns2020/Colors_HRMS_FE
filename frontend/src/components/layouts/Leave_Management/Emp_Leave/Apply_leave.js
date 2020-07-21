import React, { Component } from "react";
import axios from "axios";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../../static/Navbar";
import Footer from "../../static/Footer";
import Spinner from "../../static/Spinner";

class Apply_leave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee_id: "",
      email: "",
      start_date: "",
      end_date: "",
      remark: "",
      leave: "",
      token: localStorage.getItem("token"),
      isLoading: false,
      leave_list: [],
      err_message: ""
    };
    this.setState({ isLoading: true });
    axios
      .get("http://localhost:8000/leave/list/", {
        headers: { Authorization: `Token ${this.state.token}` },
      })
      .then((res) => {
        console.log(res.data);
        let data = res.data;
        if (data.status === "success") {
          console.log(data["data"]);
          this.setState({
            leave_list: data["data"],
            leave: data["data"][0].fields.leave_slug,
          });
        } else if (data.status === "failed") {
          console.log(data["data"]);
          alert(data["err_message"]);
        }
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        alert(err);
        this.setState({ isLoading: false });
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetHandler = () => {
    this.setState({
      employee_id: "",
      email: "",
      start_date: "",
      end_date: "",
      remark: "",
      leave: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ isLoading: true, err_message: "" }, () => {
      axios
        .post(
          `http://localhost:8000/leave/${this.state.employee_id}/apply/${this.state.leave}/`,
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
    const {
      employee_id,
      email,
      start_date,
      end_date,
      leave,
      remark,
    } = this.state;

    return (
      <>
        {this.state.isLoading ? <Spinner /> : null}
        <Navbar />
        <div className="app crud-form">
          <Link to="/logout" className="sideview">
            Logout
          </Link>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: "70px" }}>
            <div>
              <label>Employee ID</label>
              <input
                type="text"
                name="employee_id"
                value={employee_id}
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
              <label>Leave Type</label>
              <select
                name="leave"
                value={this.state.leave}
                onChange={this.handleChange}
              >
                {!this.state.leave_list.length ? (
                  <option value={"-----"}>NO LEAVE</option>
                ) : (
                  this.state.leave_list.map((leave) => (
                    <option value={leave.fields.leave_slug}>
                      {leave.fields.leave_type}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div>
              <label>Start Date </label>
              <input
                type="date"
                name="start_date"
                value={start_date}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>End Date </label>
              <input
                type="date"
                name="end_date"
                value={end_date}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Reason</label>
              <textarea
                row="3"
                cols="15"
                name="remark"
                value={remark}
                onChange={this.handleChange}
                required
              />
            </div>
            {this.state.err_message ? (
              <p className="err-text">{this.state.err_message}</p>
            ) : null}

            <button type="submit">Apply</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Apply_leave;
