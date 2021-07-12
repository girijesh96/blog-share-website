//it is the main file from which the front-end starts

import React from 'react';      //it is included for all the react function
import ReactDOM from 'react-dom';   
import App from './App';        //it is included app
import {ContextProvider} from "./context/Context"  //

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <App />                 {/* here app is included where the entire front-end setups */}
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

