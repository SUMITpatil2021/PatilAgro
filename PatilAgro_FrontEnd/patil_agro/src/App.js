/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import AboutUs from './components/AboutUs';

// import image from './Patil_agro.png';

function App() {
  return (
    <>
   
    <div className="App">
      {/* <header className="App-header">
        <h1>WelCome to PatilAgro</h1> 
        <img src="Patil_agro.jpg" width={1500} height={400}></img>
      </header> */}
 
  {/* <Routes> 
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutUs/>}/>
  </Routes> */}
  <HomePage/>
    </div>
    </>
  )
}

export default App;
