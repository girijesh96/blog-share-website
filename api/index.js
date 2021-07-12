//this is the main file for backend here backend starts(for starting the backend we write in current path of comand prompt(nodemon index.js) here nodemon is installed)
//we use here express which is server and installed here
//here we used dotenv file in which we have connected this backend to the database(mongoose{mail:girijeshk392@gmail.com}) and required cluster
//this project is hosted on the github with account {girijesh96} username and email is {girijeshkr121@gmail.com}
//here we included mongoose that is database which is online connected as well as locally on the system
//here we use authRoute which is the route of {routes auth.js} file
// here we use userRoute which is the route of {routes users.js} file
// here we use postrRoute which is the route of {routes Posts.js} file
// here we use categoryRoute which is the route of {routes categories.js} file
//we used multer here for storing the image in local storage
//in the dotenv file there is connection with the database in which actual connection is as follows(MONGO_URL=mongodb+srv://avenger:uGDW7njzksMVnA6z@cluster0.imxwv.mongodb.net/blog-share?retryWrites=true&w=majority) where a{"avenger"} is the database name and {"uGDW7njzksMVnA6z"} is password of the user and blog-share is the database name


const express = require("express"); //included express
const app = express();
const dotenv = require("dotenv");   //included dotenv for databse connectivity
const mongoose = require("mongoose"); //included mpngoose for mongodb database
const authRoute = require("./routes/auth");//here is the inclusion of path of route (/routes/path) which is used as authRoute
const userRoute = require("./routes/users");//here is the inclusion of path of route (/routes/users) which is used as userRoute
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");  //here multer used for storing the image in the backend
const path = require("path");      //here path included for routing

dotenv.config();    
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose                                  //connected backend with mong0db
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true             //it allows to find and modify in the databse
  })
  .then(console.log("Connected to MongoDB"))    //message after connection with database
  .catch((err) => console.log(err));             //if not connected then shows the error

const storage = multer.diskStorage({      //here we store the image in image folder of the backend
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });        //here we upload the image into the storage path defined as
app.post("/api/upload", upload.single("file"), (req, res) => {    //if we will give the path of(/api/upload) then there we will be able to upload the image in image file
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);  //here we changed the path of authroute to ("/api/route") so for accessing the authroute we will use the path("localhost:/5000/api/auth"){here authRoute defined above}
app.use("/api/users", userRoute); //here we changed the path of authroute to ("/api/users") so for accessing the userRoute we will use the path("localhost:/5000/api/users")
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {            //for starting the backend (localhost/5000 will be the path)
  console.log("Backend is running.");
});