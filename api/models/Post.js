//it is the Post model for the schema of post in which fields are title,description,photo,username,categories,and timestamps

const mongoose=require("mongoose")//incuded mongodb

const PostSchema=new mongoose.Schema({//define schema

    title:{             //it is the title which is type of string,and unique,and required
        type:String,
        reuired:true,
        unique:true
    },
    desc:{              //it is description and type is string and it is required
        type:String,
        reuired:true,
    },
    photo:{             //it is photo field which is type of string and it is reuired
        type:String,
        reuired:true,
    },
    username:{         //it is username field which is type of string and it is required 
        type:String,
        reuired:true,
    },
    categories:{        //it is type of categories which is type of array and it is not required
        type:Array,
        required:false
    }
},
    {timestamps:true}   //it is timestamp which will be in the Post table
);

module.exports=mongoose.model("Post",PostSchema);