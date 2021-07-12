//this page take all the posts data from {} page and send all the posts to {post.jsx }page

import Post from "../post/Post";
import "./posts.css";

export default function posts({posts}){
    return(
        <div className="posts">
            {
                posts.map((p)=>(
                    <Post post={p}/>  //this send all the posts to {post.jsx} page as post
                ))
            }
        </div>
    )
}