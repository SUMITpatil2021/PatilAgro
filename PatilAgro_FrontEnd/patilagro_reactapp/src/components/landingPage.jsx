import React, { useEffect, useState } from "react"

import { Nav, NavDropdown,Navbar,Container} from "react-bootstrap";
import logo from './Patil_agro.jpg'; 
import cart from './cart.png'
import Footer from "./footer";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { useNavigate } from "react-router-dom";
import UserLogin from "./userlogin";
import './homepage.css';
import Home from "./home";



export  default function LandingPage(){

  const Navigate = useNavigate();
  const[selectedLink, setSelectedLink] = useState("home");

  const handleLinkClick = (link)=>{
      setSelectedLink(link);
      handleCollapse();
     // Navigate(`/${link}`)
  };

  const handleCollapse = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };
  useEffect(()=>{
      setSelectedLink('home')
  },[]);
  const renderComponent = ()=>{
      switch(selectedLink){
        case "home":
              return <Home/>
          case "aboutus": 
            return <AboutUs/>
          case "contactus":
              return <ContactUs/>
          case "signin":
            return <UserLogin/>
          default:
            return null;
      }
  }

  return(
    <>
    

<div >
        <header>
          <div>

            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
              <Navbar.Brand href="/">
                  <img
                    src={logo}
                    height="50"
                    className="d-inline-block align-top"
                    alt="patil agro logo"
                  /> </Navbar.Brand>  
                <Navbar.Brand href="/">Patil AgroMart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link  onClick={()=>{handleLinkClick('aboutus')}}>About Us</Nav.Link>
                    <Nav.Link  onClick={()=>{handleLinkClick('contactus')}}>Contact Us</Nav.Link>
                    <Nav.Link onClick={()=>{handleLinkClick('signin')}}>
                      <i className="fas fa-user"></i> Sign In
                    </Nav.Link>
                    <NavDropdown
                      id="nav-dropdown-primary-example"
                      title="Register"
                      menuVariant="light"
                    >
                      <NavDropdown.Item href="#register-customer">
                        Customer
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#register-farmer">
                        Farmer
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={()=>{handleLinkClick('signin')}}>
                   
                     <img src={cart} alt="cart" height='40' /> 
                     
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </header>
      </div>

     

      <div>
      {renderComponent()}
      </div>

     <div>
     <div className=" text-center footer bg-secondary py-3 mt-auto">
                <p className="text-center m-0">&copy; 2024 Patil AgroMart| All rights reserved.</p>
            </div>
     </div>
    
     

    </>
  )
}