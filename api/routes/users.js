//this is the users route which is connected with the {User.js} model and {Post.js} model in which user model is responsible for the user schema and post model is responsible for the post schema
//in this {user.js} route we can update the user data ,delete the user data and that user posts and can find the user

const router=require("express").Router();
const User=require("../models/User");  //included {User.js} model for user related work
const Post=require("../models/Post");  //included post model for post related work
const { route } = require("./auth");   //included route for routing the link

//Update

router.put("/:id",async(req,res)=>{  //update method for user data updating
    if(req.body.userId==req.params.id)  //it check for id is same or not which is passing through the parameter and body(for checking unauthorized acess)
    {
        try{
            const updateUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true})
            const{password,...others}=updateUser._doc; //it will not send the password in response to the json data
            res.status(200).json(others);  //send the updated data to the user in json formate
        }
        catch(err){
            res.status(500).json(err);      //if there will any fault in updating the data then there will show the error
        }
    }
    else
    {
        res.status(401).json("you can only update your account")    //it will prevent the unauthroized updation of account
    }
})

//Delete

router.delete("/:id",async(req,res)=>{  //it will delete the user account along with their associated posts
    if(req.body.userId==req.params.id)  //it is checking for authorized acess
    {
    try{
        const user=await User.findById(req.params.id);
        try{
            await Post.deleteMany({username:user.username})  //delete the post of user which user's account is going to delete
            await User.findByIdAndDelete(req.params.id);    //delete the user account
            res.status(200).json("user has been delted....");
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    catch(err){
        res.status(404).json("user not found")  //if user not found then shown this error

    }
        
    }
    else
    {
        res.status(401).json("you can only delte your account")//it give error if there is practice of unauthorized acess of database
    }
})

//GET USER
router.get("/:id",async(req,res)=>{ //get the user profile
    try{
        const user=await User.findById(req.params.id);
        const{password,...others}=user._doc;
        res.status(500).json(others);
    }
    catch(err){
        res.status(401).json("err")
    }
})

module.exports=router;  //exports this router