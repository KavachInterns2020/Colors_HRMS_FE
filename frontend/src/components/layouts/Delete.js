import React, { Component } from 'react'

import {Link,Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Delete extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                   <div className="app" style={{backgroundColor:"white",color:"black",padding:"30px"}}>
                   <Link to="/logout">Logout</Link>
                   <table id="customers">
  
  <tr>
    <td>Enter Employee ID</td>
    <td><input type="text"></input></td>
    
  </tr>
  <button style={{backgroundColor:"#ff0057"}}>Delete Employee</button>
  
</table>
                   
                    
                   </div>
                <Footer/>
            </div>
        )
    }
}
