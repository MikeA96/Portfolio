import React from "react";
import ReactDOM from "react-dom";
import App from './App.js'
import './index.scss'

/*ReactDOM.render(<h3>React App</h3>, document.getElementById("root"));
if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js");
      });
    }*/
 const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : null;
    