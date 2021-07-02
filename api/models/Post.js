const mongoose=require("mongoose")

const PostSchema=new mongoose.Schema({

    title:{
        type:String,
        reuired:true,
        unique:true
    },
    desc:{
        type:String,
        reuired:true,
    },
    photo:{
        type:String,
        reuired:true,
    },
    username:{
        type:String,
        reuired:true,
    },
    categories:{
        type:Array,
        required:false
    }
},
    {timestamps:true}
);

module.exports=mongoose.model("Post",PostSchema);