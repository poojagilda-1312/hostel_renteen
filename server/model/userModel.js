const db = require('./db')

var user = function()
{ 
    /*Duplicate Allow Code*/
    // this.registerUser = (userDetails)=>{
    //     console.log("User Deatils : " +userDetails)
    //     return new Promise((resolve, reject)=>{
    //         db.collection('register').insertOne(userDetails, (err, result)=>{
    //             if(err)
    //             {
    //                 reject(err)
    //             }
    //             else
    //             {
    //                 console.log("Success : ")
    //                 resolve(result)
    //             }
    //         })
    //     })
    // }
    //Duplicate Entry not Allow Code
    this.registerUser = (userDetails) =>{
        return new Promise((resolve, reject)=>{
            db.collection('register').find().sort({'_id':-1}).toArray((err, result)=>{
                if(err)
                {
                    reject(err)
                }
                else
                {
                    var _id
                    if(result.length == 0)
                    {
                        _id = 1
                    }
                    else
                    {
                        _id = result[0]._id + 1
                    }
                }
                var flag = 0
                for(let row of result)
                {
                    if(row.email == userDetails.email)
                    {
                        flag = 1
                        console.log("*******")
                        break;
                    }
                   
                }
                if(flag == 0)
                {
                    userDetails._id = _id
                    userDetails.info = Date()
                //   if(userDetails.usertype == "Admin")
                //   {
                //     userDetails.usertype="Admin"
                //   }
                    db.collection('register').insertOne(userDetails, (err, result)=>{
                        if(err)
                        {
                            reject(err)
                        }
                        else
                        {
                            console.log("Success : ")
                            resolve(flag)
                            console.log("**&&&&-----")
                        }
                    })
                }
                else
                {
                    resolve(flag)
                    console.log("&&&&&&&")
                }
            })
        })
    }

    this.loginUser = (userDetails) =>
    {
        return new Promise((resolve, reject)=>{
            db.collection('register').find(userDetails).toArray((err, result)=>{
                err ? reject(err) : resolve(result)
            })
        })
    }
    this.createprofile = (userDetails)=>{
            console.log("User Deatils : " +userDetails)
            return new Promise((resolve, reject)=>{
                db.collection('hostelownerprofile').insertOne(userDetails, (err, result)=>{
                    if(err)
                    {
                        reject(err)
                    }
                    else
                    {
                        console.log("Success : ")
                        resolve(result)
                    }
                })
            })
        }
}
module.exports = new user