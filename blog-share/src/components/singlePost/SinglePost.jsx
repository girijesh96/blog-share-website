import "./singlePost.css"

export default function singlePost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://wallpapercave.com/wp/wp6366375.jpg" alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    this is the single post title
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                There is sufficient evidence to suggest
                 that the village was one of the important
                  settlements in ancient India. The Rig Veda 
                  talks about the gram to which various families 
                  owed their allegiance. Valmiki’s Ramayana talks of 
                  two types of villages – the ghosh and the gram. 
                  The ghosh was smaller than the gram and was also
                   known as vraja, or brij (signifying a cattle farm). 
                   Both types of villages had their officials, called
                    the mahattar. There is also a reference to a senior 
                    official called gramani or gramik.
                </p>
            </div>

        </div>
    )
}