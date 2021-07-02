import "./sidebar.css"

export default function Sidebar(){
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
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                    <div className="sidebarSocial">
                         <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-twitter"></i>
                        <i className="sidebarIcon fab fa-pinterest"></i>
                        <i className="sidebarIcon fab fa-instagram"></i>
                    </div>
            </div>

        </div>
    )
}