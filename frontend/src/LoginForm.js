
import React,{Component} from 'react';
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import {Redirect} from "react-router-dom";
class LoginForm extends React.Component{
constructor(props){
    super(props);
    const token = localStorage.getItem("token")


    let loggedIn = true
    if(token == null){
        loggedIn =false
    }
    this.state={
        username:"",
        password:"",
        loggedIn
    }

    this.onChange= this.onChange.bind(this)
    this.submitForm= this.submitForm.bind(this)
}

onChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}


submitForm(e){
    e.preventDefault()
    const { username, password } = this.state
 
   if(username === "colors" && password === "123vignesh"){
       localStorage.setItem("token","colorshrms")
       this.setState({
        loggedIn:true   
       })
   }
}




render(){
   if(this.state.loggedIn){
       return <Redirect to ="/HR_page"/>
   }



    return ( 
    <>
    
    <Navbar/>
  <div className="app">
      <Header/>
  <div className="loginForm">
        <form onSubmit={this.submitForm}>
        <input
        className="input"
        type="text"
        name="username"
        placeholder="Username"
        value={this.state.Username}
        onChange={this.onChange }
        /> 
        

        <input
        className="input"
        type="password"
        placeholder="ID"
        name="password"
        value={this.state.password}
        onChange={this.onChange }
        /> <div><br/></div>

       <input className="btn  submitButton" type="submit"/>
</form>
    
</div>
<Footer/> 
  </div>
      
</>

    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { loggedin: (token) => dispatch(authLogin(token)) };
};

export default connect(null, mapDispatchToProps)(LoginForm);
