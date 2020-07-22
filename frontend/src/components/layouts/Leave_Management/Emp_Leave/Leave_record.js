import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../static/Navbar";
import Footer from "../../static/Footer";

export default class Leave_record extends Component {
  constructor(props) {
    super(props);

    let qs = props.location.search.slice(7);

    this.state = {
      qs: qs,
      token: localStorage.getItem("token"),
      application_list: [],
      flag: true
    };
  }

  componentDidMount() {
    console.log(this.state.qs);
    axios
      .get(`*****`, {
        headers: {
          Authorization: `Token ${this.state.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ application_list: res.data["data"] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    console.log(e.target.name);

    axios.post(`*****`, {body: {data: e.target.value}}, {
      headers: { Authorization: `Token ${this.state.token}` },
    }).then(res => {
      console.log(res.data)
      this.setState({flag: !this.state.flag});
      this.componentDidMount();
    }).catch(err => {

    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="app">
        
          <div classNames="row">
            <div className="col-75">
              
                    <div className="container2 accept-reject-block">
                      <form className="accept-reject-form" onClick={this.handleSubmit}>
                        <div>
                          <h3>username:<input type="text"/> </h3>
                          <p>
                            date from <input type="date"/> 
                          </p>
                        </div>

                        <div className="row accept-decline">
                          <input
                            type="button"
                            value={""}
                            name="accept"
                            className="btn2 right-allign-button"
                          />
                          
                        </div>
                      </form>
                    </div>
                  
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
