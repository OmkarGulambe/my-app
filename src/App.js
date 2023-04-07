
import { useState } from 'react';
import React from 'react';
import './App.css';
import Alert from './component/Alert';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
const [mode, setMode]=useState("light");
const [alert, setAlert]=useState(null);

const [green, setGreen]=useState("light");
const showGreen=()=>{
  if(green==="light"){
    setGreen("success");
    document.body.style.backgroundColor="#33816a";
  }
  else{
    setGreen("light");
    document.body.style.backgroundColor="white";
  }
}

const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#27537a";
    showAlert("Dark mode is enabled","success");
    document.title="TextUtils-Dark mode";
  }
  else{
    setMode("light")
    document.body.style.backgroundColor="white";
    showAlert("Light mode is enabled","success");
    document.title="TextUtils-light mode";
  }
}
  return (
    <>
    {/* <Router> */}
      <Navbar title="omkar Gulambe" home="Home" mode={mode} toggleMode={toggleMode} green={green} showGreen={showGreen}/>
      <Alert alert={alert}/>
      {/* <div className="container my-3"> */}
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm showAlert={showAlert} headings="Enter the text to analyze below" mode={mode} />
          {/* </Route>
        </Switch> */}
      {/* </div> */}
      {/* </Router> */}
</>
  );
}

export default App;
