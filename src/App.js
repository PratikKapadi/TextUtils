// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (messge, type) => {
    setAlert({
      msg: messge,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#202046";
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success")
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my3'>
          <Routes >
            <Route exact path="/about" element={<About mode={mode} />}>

            </Route>
            <Route exact path='/' element={<TextFrom heading="Enter the txet to analyze below" mode={mode} showAlert={showAlert} />}>

            </Route>
          </Routes >
        </div>
        {/* <About/> */}
      </Router>
    </>
  );

}

export default App;
