import './App.css';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
//import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] =  useState('light');
  const [alert, setAlert] = useState(null);
  const [isBlackButtonChecked, setBlackButton] = useState(false);
  const [isBluishButtonChecked, setBlueButton] = useState(false);
 

  const toggleMode = (color, type)=> {
    //console.log("Background color: " + document.body.style.backgroundColor + " | passed " + color + " : " + type);
    if (mode === 'light' || 
      (document.body.style.backgroundColor==='black' ^ color==='black')) {
      setMode('dark');
      document.body.style.backgroundColor =  color;
      showAlert(type + " mode has been enabled", "success");
      if (color === 'black') {
        setBlackButton(true);
        setBlueButton(false);
      } else {
        setBlackButton(false);
        setBlueButton(true);
      }
      document.title = "Text Util - " + type + " Mode";
      // setInterval(()=>{document.title = "Text Util is amazing"}, 2000);
      // setInterval(()=>{document.title = "Text Util Download"}, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setBlackButton(false);
      setBlueButton(false);
      document.title = "Text Util - Light Mode";
    }
  }

  const showAlert = (message , type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500)
  }

  return (
   <>
   <Router>
   <Navbar title="TextUtil" about= "About" mode={mode} toggleMode={toggleMode} 
   blueButton={isBluishButtonChecked} blackButton={isBlackButtonChecked}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/"
           element={<TextForm showAlert={showAlert} header="Enter the text below to analyze" mode={mode}/>}/>   
    </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;