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
      flag: true,
    };

    axios
      .get(`http://localhost:8000/leave/${localStorage.getItem('username')}/records/`, {
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


  render() {
    return (
      <div>
        <Navbar />
        <div className="app">
          <Link to="/logout">Logout</Link>
          <div classNames="row">
            <div className="col-75">
              <div className="container2 accept-reject-block">  
              {this.state.application_list.length == 0
                ? ( <p>No application form....</p>)
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
                        <input
                            type="submit"
                            value={app.fields.approval=="A"?"Approved":(app.fields.approval=="P")? "Pending": "Declined"}
                            name={app.pk}
                            className="btn2 right-allign-button"
                          />
                      </form>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
