import React from 'react'
import {Navigate} from 'react-router-dom'
export default class Register extends React.Component
{
       constructor(props)
       {
          super(props)
          this.state={isRegister:0}
       }
    
   userRegisterURL="http://localhost:3000/Renteen/user/userRegister"  
   userRegister=()=>{
   
      console.log("Hello ......")
   
      var name = this.name.value
      var username = this.username.value
      var email = this.email.value
      var password = this.password.value
      var mobile = this.mobile.value
      var usertype = this.usertype.value
      
      var api_url = this.userRegisterURL+"?name="+name+"&username="+username+"&email="+email+"&password="+password+"&mobile="+mobile+"&usertype="+usertype
      
      console.log(api_url)
      
     fetch(api_url).then((response)=>
     {
        console.log("sfjbsfjkbvjfvbjfvbfjvbfjvbfjb"+response)
       response.json().then((result)=>{
           console.log(JSON.stringify(result))
          alert(JSON.stringify(result))
          var check= result.res
          if(check==true)
          {
           this.name.value=""
           this.username.value=""
           this.email.value=""
           this.password.value=""
           this.mobile.value=""
           this.setState({isRegister:1})
          }
          else{
            this.name.value=""
            this.username.value=""
            this.email.value=""
            this.password.value=""
            this.mobile.value=""
            this.setState({isRegister:0})
          }
       })
       
     }).catch((err)=>{
	  console.log("fndfklndkbfdkbfkbnfbknfb"+err)
     alert("REGISTRATION not DONE")

        })
   }


   render()
   {
       if(this.state.isRegister==1)
       {
          return<Navigate to='/contact'></Navigate>
       }
       

      return <div>
      
      <section class="for-full-back color-light " id="contact-sec">
       <div class="container" >      
          <div class="row" >
               <div class="row">
                 <div class="col-md-12 col-sm-12">
                   <div class="form-group">
                     <input type="text" class="form-control" required="required" 
                           placeholder="Enter Name" name="name" 
                           ref={c=>this.name=c}/>
                    </div>
                 </div>
                 <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                       <input type="text" class="form-control" required="required" 
                              placeholder="Enter User Name" name="username" 
                              ref={c=>this.username=c} />
                       </div>
                  </div>
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
                  <div class="col-md-12 col-sm-12">
                     <div class="form-group">
                       <input type="text" class="form-control" required="required" 
                            placeholder="Enter Mobile" name="mobile"
                            ref={c=>this.mobile=c} />
                     </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                      <div class="form-group">
                        <select name="usertype" ref={c=>this.usertype=c}>
                           <option>Select User Type</option>   
                           <option>Admin</option>   
                           <option>HostelOwner</option>
                           <option>User</option>      
                        </select>
                        </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <input type="submit" onClick={this.userRegister}
                       class="form-control" value="Register"/>
                    </div>
                  </div>
                </div>  
            </div>
         </div>
    </section>
  </div>
   }
}   
