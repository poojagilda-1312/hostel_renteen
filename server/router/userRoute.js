const express = require('express')
// format = require('string-format')
const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')

var route = express()

route.get('/userRegister', (req,res)=>{
    var userData = req.query
    console.log(userData)
    userModel.registerUser(userData).then((result)=>{
        console.log(JSON.stringify(result))
        if(result != 1)
        {
            // res.send({'result':'Data Successfully register...'})
            // console.log("Data Successfully inserted...")
            res.send({'res': true})
        }
        else
        {
            res.send({'res': false})
            // res.send({'result':'Data already exists, plz try again...'})
            // console.log("Data already exists, plz try again...")
        }
    }).catch((err)=>{
        res.send({'err':'Data Not Inserted...'})
        console.log("Data Not Inserted...."+err)
    })
})

route.get('/userLogin', (req,res)=>{
    var userData = req.query
    console.log(userData)
    userModel.loginUser(userData).then((result)=>{
        //console.log(JSON.stringify(result))
        // type = result[0].usertype
        // console.log(type)

        // res.send({'type':type})
        if(result.length==0)
		{
			req.session.token='error'
			res.send({'token':'error'})
            console.log("------")
		}
		else
		{	
            var payload={'subject':result[0].email}
			var token=jwt.sign(payload,"dywdewewhwevfewf")
           // console.log(result[0].email)
           // console.log(result[0].usertype)

			req.session.sunm=result[0].email
			req.session.srole=result[0].usertype
			res.send({'token':token,'userDetails':result[0]})
		}
        
    }).catch((err)=>{
        //res.send({'err':'User Not Login'})
        
        res.send({'token':'error'})	
    })
})

route.get('/checkUserURL',(req,res)=>{
    //console.log(req.session.email,"Email")
    //console.log(req.session.usertype)
	if(req.session.sunm==undefined)
    {
       // console.log("role"+req.session.srole)
		res.send({'status':false})
        //console.log("FALSE")
    }
	else
	{
        //console.log("TRUE")
       // console.log("role1"+req.session.srole)
		res.send({'status':true,'type':req.session.srole})	
	}	
})
route.get('/removeUserURL',(req,res,next)=>{
	req.session.sunm=undefined
	req.session.srole=undefined	
	res.send({'status':false})
})
route.get('/createprofile', (req,res)=>{
    var userData = req.query
    console.log(userData)
    userModel.createprofile(userData).then((result)=>{
        console.log(JSON.stringify(result))
        if(result != 1)
        {
            // res.send({'result':'Data Successfully register...'})
            // console.log("Data Successfully inserted...")
            res.send({'res': true})
        }
        else
        {
            res.send({'res': false})
            // res.send({'result':'Data already exists, plz try again...'})
            // console.log("Data already exists, plz try again...")
        }
    }).catch((err)=>{
        res.send({'err':'Data Not Inserted...'})
        console.log("Data Not Inserted...."+err)
    })
})

module.exports = route
