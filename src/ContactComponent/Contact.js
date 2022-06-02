import React from 'react'
import {Link} from 'react-router-dom'
export default class Contact extends React.Component
{
    
    contactUsURL="http://localhost:8989/Renteen/user/contactus"
    contactUs=()=>{
         console.log("Hello ......")
        var name = this.name.value
        var email = this.email.value
        var message = this.message.value
        var api_url = this.contactUsURL+"?name="+name+"&email="+email+"&message"+message
        fetch(api_url).then((response)=>
        {
           console.log("sfjbsfjkbvjfvbjfvbfjvbfjvbfjb"+response)
          response.json().then((result)=>{
              console.log(result)
           
     })
        }).catch((err)=>{
         console.log("fndfklndkbfdkbfkbnfbknfb"+err)
           })
      
   
       
     }
  
      
     
   render()
   {
      return <div>
           <section class="for-full-back color-light " id="contact-sec"  >
   <div class="container" >      
            <div class="row text-center" >
                <div class="col-md-8 col-md-offset-2 ">
                    <h1>Queries ? Ask Us Now.</h1>
                   
                </div>
                
            </div>
        
        <div class="row" >
            <div class="col-md-5 contact-cls" >
                <h3>Our Contact Details</h3>
					<div >
						<span><i class="fa fa-home"> </i> Address: INDORE</span>
                        <br />
						<span><i class="fa fa-phone"> </i> Phone: 9407008382</span>
                        <br />
						<span><i class="fa fa-envelope-o"> </i>E-Mail: indo@Renteen.com</span>
                        <br />
					</div>
					<br />
					<div id="social-icon">
						<a href="#"><i class="fa fa-facebook fa-2x"></i></a>
						<a href="#"><i class="fa fa-twitter fa-2x"></i></a>
						<a href="#"><i class="fa fa-linkedin fa-2x"></i></a>
						<a href="#"><i class="fa fa-google-plus fa-2x"></i></a>
						<a href="#"><i class="fa fa-pinterest fa-2x"></i></a>					
					</div>
            </div>
                <div class="col-md-7">
                   
                       
                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required="required" 
                                        placeholder="Name" name="name" ref={c=>this.name=c}/>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required="required" 
                                        placeholder="Email address" name="email" ref={c=>this.email=c}/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <input name="message" required="required" 
                                        class="form-control"   placeholder="Message" ref={c=>this.message=c} ></input>
                                    </div>
                                    <div class="form-group">
                                    <input type="submit"  onClick={this.contactUs}
                                    class="form-control" value="contactus"/>
                                    </div>
                                </div>
                            </div>
                          
                </div>
                
            </div>
      </div>
</section>

      </div>
   }
}   
