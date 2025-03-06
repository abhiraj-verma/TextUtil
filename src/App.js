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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
  }

  const toggleMode = (cls)=> {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
     if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
     // document.title = "Text Util - " + type + " Mode";
      // setInterval(()=>{document.title = "Text Util is amazing"}, 2000);
      // setInterval(()=>{document.title = "Text Util Download"}, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
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
   <Navbar title="TextUtil" about= "About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/"
           element={<TextForm showAlert={showAlert} header="Enter the text below to analyze" mode={mode}/>}/>   
    </Routes>
    {/* <TextForm showAlert={showAlert} header="Enter the text below to analyze" mode={mode}/> */}
   </div>
   </Router>


   </>
  );
}

export default App;