import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from "mobx-react";
import LoginForm from "./authforms/LoginForm";
import "./App.css";

import HR_page from "./components/layouts/HR_page";
import Logout from "./components/layouts/static/Logout";
import Add from "./components/layouts/employeeCRUD/Add";
import Delete from "./components/layouts/employeeCRUD/Delete";
import Update from "./components/layouts/employeeCRUD/Update";
import Info from "./components/layouts/employeeCRUD/Info";
import Options from "./components/layouts/employeeCRUD/Options";
import Accept_dec from "./components/layouts/Leave_Management/Accept_dec";
import Add_Leave from "./components/layouts/Leave_Management/Add_Leave";
import Leave_info from "./components/layouts/Leave_Management/Leave_info";
import Type_of from "./components/layouts/Leave_Management/Type_of";
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/HR_page" component={HR_page} />
        <Route path="/logout" component={Logout} />
        <Route path="/Add" component={Add} />
        <Route path="/Delete" component={Delete} />
        <Route path="/Update" component={Update} />
        <Route path="/Info" component={Info} />
        <Route path="/Options" component={Options} />
        <Route path="/Add_Leave" component={Add_Leave} />
        <Route path="/Accept_dec" component={Accept_dec} />
        <Route path="/Leave_info" component={Leave_info} />
        <Route path="/Type_of" component={Type_of} />
      </Switch>
    );
  }
}

export default observer(App);
