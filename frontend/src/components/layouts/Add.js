import React, { Component } from 'react'

import {Link,Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Add extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                   <div className="app" style={{backgroundColor:"white",color:"black",padding:"30px",marginBottom:"40px"}}>
                   <Link to="/logout">Logout</Link>
                   <table id="customers">
  <button style={{backgroundColor:"#ff0057"}}>Add new Employee</button>
  <tr>
    <td>Authentication ID</td>
    <td><input type="text"></input></td>
    
  </tr>
  <tr>
  <td>Employee ID</td>
    <td><input type="text"></input></td>
  </tr>
  <tr>
  <td>First Name</td>
    <td><input type="text"></input></td>
  </tr>
  <tr>
  <td>Last Name</td>
    <td><input type="text"></input></td>
  </tr>
  <tr>
  <td>Dob</td>
    <td><input type="text"></input></td>
  </tr>
  <tr>
  <td>Email</td>
    <td><input type="text"></input></td>
  </tr>
  <tr>
  <td>Gender</td>
    <td><input type="text"></input></td>
  </tr>
  <tr>
  <td>Address</td>
    <td><input type="text"></input></td>
  </tr>
  <tr>
  <td>Phone number</td>
    <td><input type="text"></input></td>
  </tr>
  <tr>
  <td>Department</td>
    <td><input type="text"></input></td>
  </tr>
</table>
                   
                    
                   </div>
                <Footer/>
            </div>
        )
    }
}
