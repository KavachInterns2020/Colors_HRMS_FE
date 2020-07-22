import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";

export default class Accept_dec extends Component {
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
      .get(`http://localhost:8000/leave/${this.state.qs}/list/`, {
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

    axios.post(`http://localhost:8000/leave/${e.target.name}/approval/`, {body: {data: e.target.value}}, {
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
              {this.state.application_list.length == 0
                ? ( <p>No application form pending....</p>)
                : this.state.application_list.map((app) => (
                    <div className="container2 accept-reject-block">
                      <form className="accept-reject-form" key={app.pk} onClick={this.handleSubmit}>
                        <div>
                          <h3>username: {app.fields.employee_id}</h3>
                          <hr />
                          <p>Remarks: {app.fields.remark}</p>
                          <p>
                            date from {app.fields.start_date} to{" "}
                            {app.fields.end_date}{" "}
                          </p>
                        </div>

                        <div className="row accept-decline">
                          <input
                            type="submit"
                            value="Approve"
                            name={app.pk}
                            className="btn2 right-allign-button"
                          />
                          <input
                            type="submit"
                            value="Decline"
                            name={app.pk}
                            className="btn2 left-allign-button"
                          />
                        </div>
                      </form>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
