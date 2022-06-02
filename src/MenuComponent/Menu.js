import React from 'react'
import {Link} from 'react-router-dom'

export default class Menu extends React.Component
{
    checkUserURL = "http://localhost:3000/Renteen/user/checkUserURL"
    constructor() {
        super()
        this.state  = {
            isuserlogin: false,
            usertype:''
        }
    }
  render()
  {
      fetch(this.checkUserURL).then((response)=>{
        response.json().then((data)=>{
            this.setState({isuserlogin:data.status,usertype:data.type})
        })
      })
      var menudata = ""
      if(!this.state.isuserlogin){
          menudata =  <ul class="nav navbar-nav">
        <li><Link to="/">HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/service">SERVICES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/contact">CONTACT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/login">LOGIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/register">REGISTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </li> 
    </ul>
  }
  else{
      if(this.state.usertype==="Admin"){
         menudata =  <ul class="nav navbar-nav">
         <li><Link to="/">show admin name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
         <li><Link to="/service">view all user&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
         <li><Link to="/contact">view hostel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
         <li><Link to="/login">delete hostel owner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
         <li><Link to="/register">block hostel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
         </li>
         <li><Link to="/register">block hostel owner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
         </li>
         <li><Link to="/register">view notification&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
         </li>
         <li><Link to="/Logout">logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
         </li>
     </ul>
      }
      else if(this.state.usertype==="HostelOwner"){
        menudata =  <ul class="nav navbar-nav">
        <li><Link to="/">show hostel owner name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/createprofile">create profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/contact">create hostel profile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/login">view confirmation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
       
       <li><Link to="/Logout">logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </li>
    </ul>
      }
      else{
        menudata =  <ul class="nav navbar-nav">
        <li><Link to="/">show user name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/service">visit application&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/contact">search hostel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
        <li><Link to="/login">booking hostel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
       
       <li><Link to="/Logout">logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </li>
    </ul>
  }
}
   return <div> 
    
      <nav class="navbar-inverse" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
               
            </div>
            
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                {menudata}
            </div>
            
        </div>
       
    </nav> 
  </div>
  }

}
