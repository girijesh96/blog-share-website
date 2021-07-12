//it is the Category modelin which we defined the type of category in the category table

const mongoose=require("mongoose") //here we included mongoose database

const CategorySchema=new mongoose.Schema({ //here we define the Category model in which the type is string and it is required

    name:{
        type:String,
        required:true,
    }
},
    {timestamps:true}   //it is the timestamps which is included in the table
);

module.exports=mongoose.model("Category",CategorySchema);  //here we export this model