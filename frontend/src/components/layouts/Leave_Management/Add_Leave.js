import React, { Component } from 'react';
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
import { Link, Redirect } from "react-router-dom";
export default class Add_Leave extends Component {
    render() {
        return (
        <>
               <Navbar/>
<div className="app">
               <div className="app crud-form">
          <Link to="/logout" className="sideview">
            Logout
          </Link>
          
          <div class="w3-container">
            <Link to="/Leave_info">
              <div
                class="w3-panel w3-card"
                style={{
                  backgroundColor: "#ff0057",
                  borderRadius: "5px",
                  paddingTop: "2px",
                  paddingLeft: "10px",
                }}
              >
                <p>Leave Application Recieved</p>
              </div>
            </Link>

            <Link to="/Type_of">
              <div
                class="w3-panel w3-card-2"
                style={{
                  backgroundColor: "#ff0057",
                  borderRadius: "5px",
                  paddingTop: "2px",
                  paddingLeft: "10px",
                }}
              >
                <p>Edit Leave form</p>
              </div>
              </Link>
              </div>

              </div>
              </div>
         <Footer/>
            </>
        )
    }
}
