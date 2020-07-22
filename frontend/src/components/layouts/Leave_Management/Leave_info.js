import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";
import Spinner from "../static/Spinner";

export default class Leave_info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leave_list: [],
      token: localStorage.getItem("token"),
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("http://localhost:8000/leave/list/", {
        headers: { Authorization: `Token ${this.state.token}` },
      })
      .then((res) => {
        console.log(res.data);
        let data = res.data;
        if (data.status === "success") {
          console.log(data["data"]);
          this.setState({ leave_list: data["data"] });
        } else if (data.status === "failed") {
          alert(data["err_message"]);
        }
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        alert(err);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { leave1_type, leave_list } = this.state;
    console.log(leave_list);
    return (
      <div>
        {this.state.isLoading ? <Spinner /> : null}
        <Navbar />

        <div className="app">
          {this.state.leave_list.length == 0 ? (
            <p>No leave list</p>
          ) : (
            this.state.leave_list.map((leave) => (
              <Link
                to={`/Accept_dec?leave=${leave.fields.leave_slug}`}
                key={leave.pk}
              >
                <div className="card leave-info-card" style={{ width: 25 + "rem" }}>
                  <div className="card-body">
                    <p className="card-text">{leave.fields.leave_type}</p>
                    <h5 className="card-title">
                      {leave.fields.leave_description}
                    </h5>
                    <a href="#" className="btn btn-primary">
                      View applications
                    </a>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
