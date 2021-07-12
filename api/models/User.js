//it is the User model in which schema for user is defined so that user can have the ,username,email,password,profilepic 
//here we include mongoose for the mongodb database


const mongoose=require("mongoose") //it is the backend like mngoose(mongodb)

const UserSchema=new mongoose.Schema({  //it define the schema for user means user can have which type of entry
    username:{                          //it will be the username of user which will be in the form of string and unique and it will be compulsory 
        type:String,
        required:true,
        unique:true
    },
    email:{                         //it is the email field this will be the type of string,and unique and compulsory
        type:String,
        required:true,
        unique:true
    },
    password:{                      //it is the password field which is type of string and it is cumpulsory
        type:String,
        required:true
    },
    profilePic:{                      //it is the profilepic field which is type of string and by default value is null
        type:String,
        default:"",
    }
},{timestamps:true}                   //it will also add the timestamp
);

module.exports=mongoose.model("User",UserSchema);  // exports the User model