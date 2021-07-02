import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function App() {
  const user=false;
  return (
    <div className="App">
      <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
            {user?<Home/>:<Register/>}
        </Route>
        <Route path="/login">
            {user?<Home/>:<Login/>}
        </Route>
        <Route path="/write">
        {user?<Write/>:<Register/>}
        </Route>
        <Route path="/setting">
        {user?<Setting/>:<Register/>}
        </Route>
        <Route path="/post/:postId">
            <Single/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
