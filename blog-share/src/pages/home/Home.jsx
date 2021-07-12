//it is the home page in which it includes the {Post.jsx} in which we first fetch all the data of the user and send to the {Posts.jsx} page 
//it also include header and sidebar for the page,it includes axios for the fetching of data from the backend
//it includes the location for fetching the path from where this url comes

import Header from "../../components/Header/Header"
import "./home.css"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar";
import {useEffect,useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home(){
    const[posts,setPosts]=useState([]);  //this is for taking the all data into the posts
    const {search}=useLocation();        //it includes location and kept that into the search

    useEffect(()=>{
        const fetchPosts=async ()=>{     //fetch all the posts
          const res= await axios.get("/posts"+search)
            setPosts(res.data);
        };
        fetchPosts();
    },[search]);

    return(
        <>
        <Header/>  { /*it includes the header file*/} 
        <div className="home">   
            <Posts posts={posts}/> { /* it includes the posts and send all the post data */}
            <Sidebar/>  { /* it includes the sidebar */}
        </div>
        </>
    );
}