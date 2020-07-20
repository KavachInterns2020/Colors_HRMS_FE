import React, { Component } from "react";
import axios from "axios";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../../static/Navbar";
import Footer from "../../static/Footer";



class Apply_leave extends Component {
  constructor(props) {
    super(props);

    this.state = {
        user_name:"",
        email1:"",
        start_date:"",
        end_date:"" ,
        reason:"",
        leave: "sick",
      
      
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
        user_name:"",
        email1:"",
        start_date:"",
        end_date:"" ,
        reason:"",
        leave: "sick"
      
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ isLoading: true }, () => {
      axios
        .post(
          `****`,
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
            alert("Error! something went wrong please check the form")
          }
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log(err);
          alert("Error! server hanged")
          this.setState({ isLoading: false });
        });
    });
  };

  render() {
    const {
      user_name,
      email1,
      start_date,
      end_date ,
      leave,
      reason,
    
    } = this.state;


    return (
      <>
       
        <Navbar />
        <div className="app crud-form">
          <Link to="/logout" className="sideview">Logout</Link>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: "70px" }}>
            
            <div>
              <label>User Name</label>
              <input
                type="text"
                name="user_name"
                value={user_name}
                onChange={this.handleChange}
                required
              />
            </div>
            
            
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email1"
                value={email1}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Leave Type</label>
              <select name="leave" value={leave} onChange={this.handleChange} >
                <option value="sick">Sick</option>
                <option value="casual">Casual</option>
                <option value="Paid">Paid</option>
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
              <label>Reason For Leave </label>
              <textarea
                row="3"
                cols="15"
                name="reason"
                value={reason}
                onChange={this.handleChange}
                required
              />
            </div>
            
            
            
            
            <button type="submit">Apply</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Apply_leave;
