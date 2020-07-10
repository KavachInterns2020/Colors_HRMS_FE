import React, { Component } from 'react'

import {Link,Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from './Header';

  class Add extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        EmployeeId:"" , 
        firstname:"",
         middlename:"",
         lastname:"",
         email:"",
         which:"male",
         date:"",
         phoneno:"",
         doorno:"",
         street:"",
         area:"",
         state:"",
         pincode:"",
         department:"",
         topic:"",
        topic: 'yes'
      }
    }
  
    handlefirstnameChange = event => {
      this.setState({
        firstname: event.target.value
      })
    }
    handlemiddlenameChange= event => {
      this.setState({
        middlename: event.target.value
      })
    }
    handleLastnameChange = event => {
      this.setState({
        lastname: event.target.value
      })
    }
    handleDateChange = event => {
      this.setState({
        date: event.target.value
      })
    }
    handlePhonenoChange = event => {
      this.setState({
        phoneno: event.target.value
      })
    }
    handleDoornoChange = event => {
      this.setState({
        doorno: event.target.value
      })
    }
    handleAreaChange = event => {
      this.setState({
        area: event.target.value
      })
    }
    handleStateChange = event => {
      this.setState({
        state: event.target.value
      })
    }
    handleDepartmentChange = event => {
      this.setState({
        department: event.target.value
      })
    }
    handlePincodeChange = event => {
      this.setState({
        pincode: event.target.value
      })
    }
    
    handleStreetChange = event => {
      this.setState({
        street: event.target.value
      })
    }

  
    handleIdChange = event => {
      this.setState({
        EmployeeId: event.target.value
      })
    }
  
    handleTopicChange = event => {
      this.setState({
        topic: event.target.value
      })
    }
    handleGenderChange = event => {
      this.setState({
        which: event.target.value
      })
    }
  
    handleSubmit = event => {
      
      event.preventDefault()
    }
  
    render() {
      const {EmployeeId , firstname, middlename,lastname,email,which,date,phoneno,doorno,street,area,state,pincode,department,topic } = this.state
      return (
        <>
        <Navbar/>
        <div className="app">
        <Link to="/logout">Logout</Link>
          <form onSubmit={this.handleSubmit} style={{marginBottom:"70px"}}>
          <div>
            <label>Employee id </label>
            <input
              type="text"
              name="employee_id"
              value={EmployeeId}
              onChange={this.handleIdChange}
            />
          </div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={firstname}
              onChange={this.handlefirstnameChange}
            />
          </div>
          <div>
            <label>Middle Name</label>
            <input
              type="text"
              name="middle_name"
              value={middlename}
              onChange={this.handlemiddlenameChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={lastname}
              onChange={this.handleLastnameChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label>Gender</label>
            <select value={which}  onChange={this.handleGenderChange}>
              <option value="male">male</option>
              <option value="Female">Female</option>
              <option value="Between">Between</option>
            </select>
          </div>
          <div>
            <label>DOB</label>
            <input
              type="date"
              name="date_of_birth"
              value={date}
              onChange={this.handleDateChange}
            />
          </div>
          <div>
            <label>Phone no </label>
            <input
              type="text"
              name="phone_number"
              value={phoneno}
              onChange={this.handlePhonenoChange}
            />
          </div>
          <div>
            <label>Door No </label>
            <input
              type="text"
              value={doorno}
              onChange={this.handleDoornoChange}
            />
          </div>
          <div>
            <label>Street </label>
            <input
              type="text"
              name="street"
              value={street}
              onChange={this.handleStreetChange}
            />
          </div>
          <div>
            <label>Area </label>
            <input
              type="text"
              value={area}
              name="area"
              onChange={this.handleAreaChange}
            />
          </div>
          <div>
            <label>State </label>
            <input
              type="text"
              value={state}
              name="state"
              onChange={this.handleStateChange}
            />
          </div>
          <div>
            <label>Pin code </label>
            <input
              type="text"
              value={pincode}
              name="pincode"
              onChange={this.handlePincodeChange}
            />
          </div>
          <div>
            <label>Department </label>
            <input
              type="text"
              value={department}
              name="department"
              onChange={this.handleDepartmentChange}
            />
          </div>

         
          <div>
            <label>Are you a active employee</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="yes">yes</option>
              <option value="No">No</option>
              <option value="irregular">irregular</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        </div>
        <Footer/>
        </>
      )
    }
  }
  
  export default Add
