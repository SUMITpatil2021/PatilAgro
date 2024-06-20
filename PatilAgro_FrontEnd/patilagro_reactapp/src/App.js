import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="contactus" element={<ContactUs/>}/>
        <Route path="footer" element={<Footer/>}/>

      </Routes>
    </div>
  );
}

export default App;
