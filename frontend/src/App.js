import React,{Component} from 'react';
import {Link,Switch,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {observer} from "mobx-react";
import LoginForm from "./LoginForm";
import UserStore from "./Stores/UserStores";
import './App.css';

import HR_page from "./components/layouts/HR_page";
import Logout from "./components/layouts/Logout";
class App extends React.Component{
render(){

     return (
          <Switch>
         <Route exact path="/" component={LoginForm}/>
         <Route path="/HR_page" component={HR_page}/>
         <Route path="/logout" component={Logout}/>
          
         </Switch>
        );
      }


   
  }
  


export default observer(App);
