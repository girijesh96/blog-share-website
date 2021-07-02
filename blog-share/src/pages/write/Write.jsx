import "./write.css";

export default function Write(){
    return(
        <div className="write">
            <img className="writeImg" src="https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbGxhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="tell your story..." type="text" className="writeInput">

                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>

            </form>
        </div>
    )
}