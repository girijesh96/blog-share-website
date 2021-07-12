//it enable us to edit the logged in user profile like username,email,password
//it also included sidebar ,context(for kepping the data of logged user) and axios for fetching and putting the data into backend

import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";  //include axios for backend data fetching and putting

export default function Settings() {
  const [file, setFile] = useState(null);  //it is used for taking the profile pic
  const [username, setUsername] = useState("");  //it is used for taking the username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false); //it is used for keeping the message that user is logged inn or not

  const { user, dispatch } = useContext(Context);  //it us used for keeping the data of logged in user
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {   //after submitting the edited data it update the data into backend
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {   // if there is file then it upload to the image folder locally
      const data = new FormData();
      const filename = Date.now() + file.name;  //it fetch the current date
      data.append("name", filename);    //it is the name of file which will go to the image folder
      data.append("file", file);        // it is the actual file which will be put in the image folder
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);  //it upload the file in the image folder
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);  //it update the user data
      setSuccess(true);                                               //it set the message to sucess
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });        //it set the message to update sucessfull
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });                            // if there will not be the data update update then there will be the message that update failed
    }
  };
  return (
    <div className="settings">    //it enable to edit the profile
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>  {/*it show the option to update profilr*/}
          <span className="settingsDeleteTitle">Delete Account</span>       {/*it show the option to delete the profile*/}
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>             {/* it go to the handeSubmit() function after clicking on the submit button */}
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}   //it shows the user image
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}            //it take the image
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}           //it take the username
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}               //it take the password
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}           //it take the password
          />
          <button className="settingsSubmit" type="submit">         
            Update                                                  {/* it is the upate button */}
          </button> 
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />                                                   {/* it includes the sidebar */}
    </div>
  );
}