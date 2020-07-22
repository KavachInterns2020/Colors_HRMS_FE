import React, { Component } from "react";
import axios from "axios";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../../static/Navbar";
import Footer from "../../static/Footer";
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



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


  dateChanged1=(d)=>{
    this.setState({start_date: d});
  }
  dateChanged2=(d)=>{
    this.setState({end_date: d});
  }


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
              <DatePicker
                  selected={this.state.start_date}
               width="100%"
               name="start_date"
               onChange={this.dateChanged1}
               value={start_date}
              
              minDate={new Date()} 
              isClearable
              required 
                />
            </div>
            <div>
              <label>End Date </label>
              <DatePicker
                  selected={this.state.end_date}
               width="100%"
               name="end_date"
               onChange={this.dateChanged2}
               value={end_date}
              
              minDate={new Date()} 
              isClearable
              required 
                />
            </div>
            <div>
              <label>Reason For Leave </label>
              <textarea
                row="3"
                cols="30"
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
