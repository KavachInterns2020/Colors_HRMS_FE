import React, { Component } from 'react'
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
export default class Leave_info extends Component {
    constructor(props){
        super(props);

        this.state={
            leave1_type:"",
            leave1_description:""
        }
    }
    
    
    render() {
        const {
            leave1_type,
            leave1_description
            
            } = this.state;

        return (
            <div>
                <Navbar/>

                <div className="app">
                <Link to="/logout">Logout</Link>
                <table>
  
  <tr>
      <Link to="/Accept_dec">
      <td>
        <input 
    type="text"
    name="leave1_type"
    value={leave1_type}
    style={{color:"black",backgroundColor:"grey"}}
    /> 
    </td>
</Link>
    
    
    <td>
        <textarea
                rows="4" 
                cols="50"
                name="leave1_description"
                value={leave1_description}
               />
              </td>
  </tr>
  
</table>
</div>
<Footer/>
            </div>
        )
    }
}
