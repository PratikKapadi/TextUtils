// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#202046";
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my3'>

        <TextFrom heading="Enter the txet to analyze below" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );

}

export default App;
