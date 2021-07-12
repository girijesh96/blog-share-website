//this is for registration and login of user
//here we included {User.js } model for User related query
//for extra information we can see {users.js} route which is same as this route

const router=require("express").Router();
const User=require("../models/User");     // here we included User.js model
const bcrypt=require('bcrypt');           //we used bcrypt for encryption of password of user

//REGISTER

router.post("/register",async(req,res)=>{    //this is the register route for registration of user
    try{
        
        console.log(req.body.password);      //it console the password      
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            
        });
        const user=await newUser.save();
        res.status(200).json(user);
        
       
    }catch(err){
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login",async(req,res)=>{  //this is for login of user in which user can login with their given username and passwords
    try{
            const user=await User.findOne({username:req.body.username,password:req.body.password})  //it check username and password is correc or not
            !user&&res.status(400).json("Wrong Credentials!")  //if not match it shows error

            const{password,...others}=user._doc  //it doesnot send passowrd and other information of user will be sent
            res.status(200).json(others);   //send other information of user
    }
    catch(err){
        res.status(500).json(err);   //it shows error if there is any error occured during login time

    }
})

module.exports=router;   //exports {auth.js} route