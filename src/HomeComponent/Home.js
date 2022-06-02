import React from 'react'
import {Link} from 'react-router-dom'
import image from'../images/hostel1.jpg'
export default class HomeComponent extends React.Component
{
   render()
   {
      return <div>
           
    
    <section class="for-full-back color-white " id="about"  >
   <div class="container" >
      
            <div class="row text-center" >
                <div class="col-md-8 col-md-offset-2">
                    <h1>Companys Profile</h1>
                    <h4>
                        <strong>
                        RENTEEN 
                      WE PROVIDE A BETTER PLACE FOR ACCOMADATION
                            </strong>
                    </h4>
                </div>
                
            </div>
        
        <div class="row text-center g-pad-bottom" >
                <div class="col-md-12">
                    
                    <h4>
                    Renteen stands as the one-stop solution for accommodation and translocation to a new city. A platform that helps students and professionals to find the best  hostel, room to stay. 

                    </h4>
                </div>
                
                
            </div>
            <div class="row text-center g-pad-bottom" >
                <div class="col-md-12">
                   <img src={image} height={500}class="image" width={500}></img>
                   <img src={image} height={500} width={500}></img>
                  
                </div>
                
                
            </div>
      </div>
</section>
      
  
      </div>
   }
}   
