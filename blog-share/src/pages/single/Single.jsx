//it enable us to find the single post which we want to find and it also include the {sidebar.jsx} and {SinglePost.jsx}

import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single(){
    return(
        <div className="single">
            <SinglePost/>                           {/* it include the {SinglePost.jsx} file for finding the specific single post */}
            <Sidebar/>                              {/*it include the {Sidebar.jsx} file for includeing the side file */}
        </div>
    )
}