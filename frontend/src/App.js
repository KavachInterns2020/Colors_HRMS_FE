import React,{Component} from 'react';
import {Link,Switch,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {observer} from "mobx-react";
import LoginForm from "./LoginForm";
import UserStore from "./Stores/UserStores";
import './App.css';

import HR_page from "./components/layouts/HR_page";
import Logout from "./components/layouts/Logout";
import Add from "./components/layouts/Add";
import Delete from "./components/layouts/Delete";
import Update from "./components/layouts/Update";
import Info from "./components/layouts/Info";
import Options from "./components/layouts/Options";
class App extends React.Component{
render(){

     return (
          <Switch>
         <Route exact path="/" component={LoginForm}/>
         <Route path="/HR_page" component={HR_page}/>
         <Route path="/logout" component={Logout}/>
         <Route path="/Add" component={Add}/>
         <Route path="/Delete" component={Delete}/>
         <Route path="/Update" component={Update}/>
         <Route path="/Info" component={Info}/>
         <Route path="/Options" component={Options}/>
          
         </Switch>
        );
      }


   
  }
  


export default observer(App);
