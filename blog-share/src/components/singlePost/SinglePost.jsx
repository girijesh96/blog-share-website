//this page give the data of an indivisual post on clicking on the post title

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();               //it find the path from which the request come for single post data show
  const path = location.pathname.split("/")[2];  //it fetch the id of the particular blog for which we want to view the data  
  const [post, setPost] = useState({});          //it kept all the data of particular post in the post
  const PF = "http://localhost:5000/images/";    //it fetch the profile image
  const { user } = useContext(Context);          //it keep in the mind that which user has logged in according to that it allowed to edit the post and delete the post (it allowed only those post to edit or delete which is granted to the user if same user logged in which created those posts)
  const [title, setTitle] = useState("");         //it set the title
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);  //it kept in mind that either the user click on update or not if clicked then it hide the click button from the user

  useEffect(() => {                                 //this function get all the posts of the particular id which request for single post
    const getPost = async () => {
      const res = await axios.get(`/posts/`+path);
      console.log(res);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {                //this method delete the post
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {                //this method Update the post
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)  //by default update mode set to false
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />  //it shows the photo of the post
        )}
        {updateMode ? (    //if there will be the update mode (upate button clicked) then it will show the edited title of post which can be edited
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (             //if there will not the update mode then it will simply show the title and options to edit and delete
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (  //here it check that if the user which is logeed in and the author of the post is same then it give the options to update and delete the post and if we click on the update then updatemode will be true and there will be the options to updated the post
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}    //here set update mode to true
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}                        //it call to delete function for deleting the post
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (   //it check if there is update mode 
          <textarea
            className="singlePostDescInput"
            value={desc}      //it show editable value
            onChange={(e) => setDesc(e.target.value)}  
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}