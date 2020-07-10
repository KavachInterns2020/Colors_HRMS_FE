import React, { Component } from 'react'

import {Link,Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from './Header';

  class Delete extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        EmployeeId:""  
        
      }
    }
  
    
    handleIdChange = event => {
      this.setState({
        EmployeeId: event.target.value
      })
    }
  

  
    handleSubmit = event => {
      
      event.preventDefault()
    }
  
    render() {
      const {EmployeeId } = this.state
      return (
        <>
        <Navbar/>
        <div className="app">
        <Link to="/logout">Logout</Link>
          <form onSubmit={this.handleSubmit}>
          <div>
            <label>Employee id </label>
            <input
              type="text"
              name="employee_id"
              value={EmployeeId}
              onChange={this.handleIdChange}
            />
          </div>
          
    <button type="submit">Delete</button>
        </form>
        </div>
        <Footer/>
        </>
      )
    }
  }
  
  export default Delete
