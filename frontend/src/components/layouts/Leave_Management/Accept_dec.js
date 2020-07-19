import React, { Component } from 'react'
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";

export default class Accept_dec extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                 <div className="app">
                 <Link to="/logout">Logout</Link>
                 <div classNames="row">
  <div className="col-75">
    <div className="container2">
      <form >
      <div className="row">
          <div className="col-50">
           
            
           <div className="row">
              
              
            </div>
          </div>

          <div className="col-50">
            <label for="cname" style={{color:"black"}}>Name </label>
            <input type="text" id="cname" name="cardname" style={{marginRight:"200px"}}/>
            <label for="ccnum" style={{color:"black"}}>Description</label>
            <textarea type="text" id="ccnum" name="cardnumber" row="60" cols="40" />
            
            <label for="expmonth">Start Date</label>
            <input type="date" id="expmonth" name="expmonth" style={{width:"500px",color:"black"}} />
            <div className="row">
              <div className="col-50">
                <label for="expyear">End Date</label>
                <input type="date" id="expyear" name="expyear"  style={{width:"500px",color:"black"}}/>
              </div>
              
            </div>
          </div>
          <input type="submit" value="Approve" className="btn2" style={{margin:"2px"}}/>
          <input type="submit" value="Decline" className="btn2"/>
        </div>
        
       
      </form>
    </div>
  </div>
  </div>
</div>

                <Footer/>
            </div>
        )
    }
}
