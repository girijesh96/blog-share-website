//in this file {App.js} file is included in index.js file where {App.js} file 
//this file route all the other file like(<Route path="/register"> {user?<Home/>:<Register/>} </Route>) which means if we click on frontend browser "http://localhost:5000/api/register " then this will take us to the lead of home page(if there will be a user logged in otherwise it will take to the register page ) here "http://localhost:5000/api" it is by default api which i have set in packag.json file after it actual routes works

import Home from "./pages/home/Home"    //it include {Home.jsx} file
import TopBar from "./components/topbar/TopBar";  //it includes {Topbar.jsx} file
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'; //it includes browserouter which set the route of the link
import { useContext } from "react";    //here context is used for the keeping of user data
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context);
  return (
    <div className="App">
      <Router>             {/*here router incuded for routing the link */}
      <TopBar/>             {/*topbar included for top view*/}
      <Switch>
        <Route exact path="/">  {/*here after giving the route path {http://localhost:5000/api/} in the browser we goes to {Home.jsx} page where {http://localhost:5000/api} is default path */}
          <Home/>
        </Route>
        <Route path="/register">  {/*here after giving the route path {http://localhost:5000/api/register} in the browser we goes to {Home.jsx} page if there is already a user otherwise goes to {Register.jsx} page  where {http://localhost:5000/api} is default path */}
            {user?<Home/>:<Register/>}
        </Route>
        <Route path="/login">      {/*here after giving the route path {http://localhost:5000/api/login} in the browser we goes to {Home.jsx} page if there is already a user otherwise goes to {Login.jsx} page  where {http://localhost:5000/api} is default path */}
            {user?<Home/>:<Login/>}
        </Route>
        <Route path="/write">       {/*here after giving the route path {http://localhost:5000/api/write} in the browser we goes to {Write.jsx} page if there is already a user otherwise goes to {Register.jsx} page  where {http://localhost:5000/api} is default path */}
        {user?<Write/>:<Register/>}
        </Route>
        <Route path="/settings">    {/*here after giving the route path {http://localhost:5000/api/register} in the browser we goes to {Setting.jsx} page if there is already a user otherwise goes to {Register.jsx} page  where {http://localhost:5000/api} is default path */}
        {user?<Setting/>:<Register/>}
        </Route>
        <Route path="/post/:postId">  {/*here after giving the route path {http://localhost:5000/api/post/:postid} in the browser we goes to {Single.jsx} page} page  where {http://localhost:5000/api} is default path */}
            <Single/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
