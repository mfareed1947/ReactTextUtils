import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeClass = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }




  const toggleMode = (cls) => {
    removeClass();
    console.log(cls)

    document.body.classList.add('bg-' + cls)

    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#25053e";
      showAlert("Darkmode mode has been enabled", "success")
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode mode has been enabled", "success")
    }
  }

  return (
    <>
      <BrowserRouter>

        <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>

            <Route exact path="/About" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextArea showAlert={showAlert} heading="This is Text Area" mode={mode} alert={alert} />} />

          </Routes>

        </div>

      </BrowserRouter>


    </>
  );
}

export default App;
