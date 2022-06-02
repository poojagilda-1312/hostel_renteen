import React from 'react'
import {Navigate} from 'react-router-dom'
export default class Login extends React.Component
{
   constructor(props)
   {
     
      super(props)
      this.state={isLogin:0}
     
   }
   loginURL = "http://localhost:3000/Renteen/user/userLogin"
   userLogin = ()=>{ 
   
      var email = this.email.value
      var password = this.password.value
         
      console.log(email+" : "+password);
      var api_url = this.loginURL+"?email="+email+"&password="+password
        console.log(api_url) 
      
      fetch(api_url).then((response)=>{
        
          response.json().then((result)=>{
            alert(result.token)
           
            if(result.token!='error')
            {
                console.log(result.userDetails)
                console.log(result.userDetails.usertype)
           if(result.userDetails.usertype=="Admin")
           {
                this.setState({isLogin:1})
                console.log(this.setState.isLogin)
            }
            if(result.userDetails.usertype=="HostelOwner")
              {
                this.setState({isLogin:2})
                console.log(this.setState.isLogin)
          }
         if(result.userDetails.usertype=="User")
         {
              this.setState({isLogin:3})	    		
              console.log(this.setState.isLogin)
       }
        }
        else
        {
        alert('login failed')	
         } 
          
                
         })
      }).catch((err)=>{
             console.log("Error is : "+err)
            
           })   
      
   }

   

   render()
   {
      if(this.state.isLogin==1)
       {
          alert("__________")
          alert(this.state.isLogin)

          return <Navigate to='/admin'/>
      }
      
      if(this.state.isLogin==2)
      {
	   return <Navigate to='/hostelOwner' />
      }
      
      if(this.state.isLogin==3)
      { 
         alert(this.state.isLogin) 
	      return <Navigate to='/user' />
      }



      return <div>
      
      <section class="for-full-back color-light " id="contact-sec">
       <div class="container" >      
          <div class="row" >
                <div class="row">
                   <div class="col-md-12 col-sm-12">
                       <div class="form-group">
                       <input type="email" class="form-control" required="required" 
                             placeholder="Enter Email" name="email" 
                             ref={c=>this.email=c}/>
                       </div>
                    </div>
                    <div class="col-md-12 col-sm-12">
                         <div class="form-group">
                         <input type="password" class="form-control"
                            required="required" placeholder="Enter Password"
                            name="password" ref={c=>this.password=c} />
                          </div>
                    </div>
                 </div>
                 <div class="row">
                     <div class="col-md-12 col-sm-12">
                         <div class="form-group">
                             <button type="submit" class="btn btn-default" onClick={this.userLogin}>Submit Request</button>
                         </div>
                     </div>
                 </div>
            </div>
         </div>
    </section>
  </div>
   }
}   
