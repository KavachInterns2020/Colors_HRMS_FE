import React, { Component } from 'react'
import {Link,Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Options extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                   <div className="app">
                   <Link to="/logout">Logout</Link>
                   
                   <div class="w3-container">
  


<Link to="/Add">
<div class="w3-panel w3-card" style={{backgroundColor:"#ff0057",borderRadius:"5px",paddingTop:"2px",paddingLeft:"10px" }}><p>Add Employee</p></div>
</Link>
  
  <Link to ="/Delete">
  <div class="w3-panel w3-card-2" style={{backgroundColor:"#ff0057",borderRadius:"5px",paddingTop:"2px",paddingLeft:"10px"}}><p>Delete Employee</p></div>
  </Link>
  
  
  
  <Link to ="/Update">
  <div class="w3-panel w3-card-4" style={{backgroundColor:"#ff0057",borderRadius:"5px",paddingTop:"2px",paddingLeft:"10px",paddingRight:"2px"}}><p>Update Employee</p></div>

  </Link>

  <Link to ="/Info">
  <div class="w3-panel w3-card-4" style={{backgroundColor:"#ff0057",borderRadius:"5px",paddingTop:"2px",paddingLeft:"10px",paddingRight:"2px"}}><p>Employee Info</p></div>

  </Link>


  </div>
  
                   </div>
                <Footer/>
            </div>
        )
    }
}
