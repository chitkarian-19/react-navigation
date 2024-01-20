import logo from './logo.svg';
import './App.css';
import CustomNavbar from "./components/CustomNavbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
function App() {

  const [mode,setMode] = useState("light");
  
  useEffect(()=>{
    var curr_mode = localStorage.getItem("mode");
    console.log("curr_mode",curr_mode);
    if(curr_mode === null){
      setMode("light");
    }
    else{
      setMode(curr_mode);
    }
  });

  return (
    <div className="App" data-theme={mode}>
      <div className="container-body">
      <CustomNavbar mode={mode} setMode={setMode} ></CustomNavbar>
      </div>
    </div>
  );
}

export default App;
