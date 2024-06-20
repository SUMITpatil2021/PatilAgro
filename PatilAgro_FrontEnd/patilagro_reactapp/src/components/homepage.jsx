import React, { useEffect, useState } from "react"

import { Nav, NavDropdown,Navbar,Container} from "react-bootstrap";
import logo from './Patil_agro.jpg'; 
import Footer from "./footer";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { useNavigate } from "react-router-dom";

export  default function HomePage(){

  const Navigate = useNavigate();
  const[selectedLink, setSelectedLink] = useState();

  const handleLinkClick = (link)=>{
      setSelectedLink(link);
     // Navigate(`/${link}`)
  };

  useEffect(()=>{
      setSelectedLink()
  },[]);

  const renderComponent = ()=>{
      switch(selectedLink){
        case "":
              return <HomePage/>
          case "aboutus": 
            return <AboutUs/>
          case "contactus":
              return <ContactUs/>
        
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
                    <Nav.Link href="#signin">
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