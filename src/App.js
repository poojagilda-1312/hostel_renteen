import React, { createContext, useContext } from 'react'
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom'

import Header from './HeaderComponent/Header'
import Home from './HomeComponent/Home'
import Service from './ServiceComponent/Service'
import Contact from './ContactComponent/Contact'
import Login from './LoginComponent/Login'
import Register from './RegisterComponent/Register'
import AdminHome from './AdminHomeComponent/AdminHome' 
import HostelOwnerHome from './HostelOwnerHomeComponent/HostelOwnerHome' 
import UserHome from './UserHomeComponent/UserHome' 
import Menu from './MenuComponent/Menu'
 
import Logout from './LogoutComponent/Logout'
import Createprofile from './CreateprofileComponent/Createprofile'
   



export default class App extends React.Component
{
   render()
   {
      return <div>
          <Header/>
       <BrowserRouter>
       <Menu/>
      
           <Routes>
               <Route path="/" element={<Home/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/service" element={<Service/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/admin" element={<AdminHome/>}></Route>  
             <Route path="/hostelOwner" element={<HostelOwnerHome/>}></Route> 
             <Route path="/user" element={<UserHome/>}></Route> 
            <Route path="/Logout" element={<Logout/>}></Route>
            <Route path="/createprofile" element={<Createprofile/>}></Route>

              
           </Routes>
        </BrowserRouter> 
        
      </div>
   }
}  
