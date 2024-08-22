// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" />
      <TextFrom heading="Enter the txet to analyze below"/>
    </div>
  );
}

export default App;
