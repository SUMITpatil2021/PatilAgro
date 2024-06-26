import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import UserLogin from './components/userlogin';
import UserDashboard from './userComponents/userdashboard';
import SignUp from './components/signUp';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="contactus" element={<ContactUs/>}/>
        <Route path="footer" element={<Footer/>}/>
        <Route path="login" element={<UserLogin/>}/>
        <Route path="signup" element={<SignUp/>}/>

        {/* //User Dashboard  */}

        <Route path="userdashboard" element={<UserDashboard/>}/>

      </Routes>
    </div>
  );
}

export default App;
