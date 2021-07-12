//all the categories realated work can be done her
//rest the information or structure is ame as {users.js} route so for any more information can view the {users.js } route

const router=require("express").Router();
const Category=require("../models/Category"); //included {Category.js} modelfor category schema

router.post("/",async(req,res)=>{           //for creating the new category
    try{
        const newCategory=new Category(req.body);
        const savedCategory=await newCategory.save();
        res.status(200).json(savedCategory)
    }
    catch(err){
        res.status(400).json(err);
    }
})

router.get("/",async(req,res)=>{   //for getting all the category
    try{
        const categories=await Category.find();
        res.status(200).json(categories);
    }
    catch(err){
        res.status(400).json(err);
    }
})

module.exports=router;