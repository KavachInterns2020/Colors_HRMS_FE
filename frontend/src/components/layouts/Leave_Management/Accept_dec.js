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
            <label for="cname">Name </label>
            <input type="text" id="cname" name="cardname"/>
            <label for="ccnum">Description</label>
            <textarea type="text" id="ccnum" name="cardnumber" row="60" cols="80" />
            
            <label for="expmonth">Start Date</label>
            <input type="date" id="expmonth" name="expmonth" />
            <div className="row">
              <div className="col-50">
                <label for="expyear">End Date</label>
                <input type="date" id="expyear" name="expyear" />
              </div>
              
            </div>
          </div>
          
        </div>
        
        <input type="submit" value="Approve" className="btn2"/>
          <input type="submit" value="Decline" className="btn2"/>
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
