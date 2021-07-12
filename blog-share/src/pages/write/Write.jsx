//it enable us to write the single post 
// it include the axios for backend relate work(like fetching the data from backend and putting the data into backend)
//it includes the context for keeping the data of the user
//useState included for taking the title,desc,file etc


import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";  //here included axios
import { Context } from "../../context/Context";  //here included context

export default function Write() {   //this function take the single post 
  const [title, setTitle] = useState("");  //this take the title of the post
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);   
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {   //after clicking on the submit it submit the post data
    e.preventDefault();                 //it prevent to submit the post without giving the data into the field
    const newPost = {
      username: user.username,          //it set the username to the logged in user
      title,                             //title which has been taken
      desc,                              //desc which has been taken by the user
    };
    if (file) {                           //if there will be also the pic then we put the file into the local storage and set the file name with the name of file and date
      const data =new FormData();          
      const filename = Date.now() + file.name; //set the filename with the date and image name
      data.append("name", filename);            //set the name with the filename
      data.append("file", file);                //append the file with the taken file
      newPost.photo = filename;                 
      try {
        await axios.post("/upload", data);       //here we upload the photo to local storage on api side photo file
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);    //here we save the new post data into the backend
      window.location.replace("/post/" + res.data._id);   //after submitting the post and saving into backend it move the window location to the editable single post page
    } catch (err) {}
  };
  return (                      //here we can write the title,description etc
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>  {/* after clicking on submit it goes on handlesubmit function */}
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}  // it take title 
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}     //it take description
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}