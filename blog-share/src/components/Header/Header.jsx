import "./header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React&Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg" alt=""/>
        </div>
    )
}