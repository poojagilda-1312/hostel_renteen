import React from 'react'

import { Navigate } from 'react-router-dom';

export default class Logout extends React.Component
{

	removeUserURL="http://localhost:3000/Renteen/user/removeUserURL"
	
	constructor(props)
	{
		super(props)
		this.state={
			isuserlogin:true
		}
	}
	render()
	{
		fetch(this.removeUserURL).then((response) =>{
		response.json().then((data)=>{
			this.setState({isuserlogin:data.status})
		}) 
		}).catch((err)=>{
			console.log(err)
		})
		
		if(!this.state.isuserlogin)
		{
			return <Navigate to='/' />
		}
		
		return(
		<div>
		</div>
		) 	
	}
}



