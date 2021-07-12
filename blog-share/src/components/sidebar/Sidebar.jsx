//this is the sidebar of the all page

import "./sidebar.css";
import {useEffect,useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function Sidebar(){
    const[cats,setCats]=useState([]);
    const location=useLocation();
    console.log(location)

    useEffect(()=>{
        const getCats=async()=>{
            const res=await axios.get("/categories")
            setCats(res.data);
        }
        getCats();
    },[]);

    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImage" src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg" alt=""/>

                <p>
                    This is the sidebar in which we can
                    write the thing like as of sidebar
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {
                        cats.map((c)=>(
                            <Link to={`/?cat=${c.name}`} className="link"> {/* it fetches all categories and print in the sidebar menu */}
                            <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        ))
                    }
                </ul>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                    <div className="sidebarSocial">                              {/* this is the links of all the social media */}                 
                         <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-twitter"></i>
                        <i className="sidebarIcon fab fa-pinterest"></i>
                        <i className="sidebarIcon fab fa-instagram"></i>
                    </div>
            </div>

        </div>
    )
}