import React, { Component } from 'react'
import Navbar from "../components/layouts/static/Navbar";
import Footer from "../components/layouts/static/Footer";
import { Link, Redirect } from "react-router-dom";
export default class Introduction extends Component {
    render() {
        return (
            <div>
                   <Navbar/>
                <div className="app">
             
                <Link to="/SignInForm">
                   <input
                    type="button"
                    className="btn btn-primary"
                    value="Employee"
                    /><br/><br/>

                </Link>

                <Link to="/LoginForm">
                <input
                    type="button"
                    className="btn btn-primary"
                    value="H.R"
                    />


                </Link>
                
                </div>
                <Footer/>
            </div>
        )
    }
}
