import React, { useState } from "react"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Cart from "./cart";
import Footer from "../components/footer";

export default function UserDashboard(){

    const Navigate=useNavigate();
    const[selectedLink ,setSelectedLink]=useState();

    const handleLinkClick=(link)=>{
        setSelectedLink(link);
    };

    const renderComponent=()=>{
        switch(selectedLink)
       {
        case "cart":
            return <Cart/>
            
            default :
            return null;
       } 
    }

    return(
        <>
          
            <Navbar bg="dark" variant="dark" expand="lg"  >
                <Container>
                    <Navbar.Brand >Sahyadri Navigator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link  onClick={()=>{handleLinkClick('upcomingtrekk')}}>Upcoming Trekks</Nav.Link>
                        <Nav.Link  onClick={()=>{handleLinkClick('ViewMyTrekk')}}>My Trekks</Nav.Link>
                        <Nav.Link  onClick={()=>{handleLinkClick('Enquiry')}}>Enquiry</Nav.Link>
                        <Nav.Link href="#" style={{color:"white"}} disabled > {""}  Hello! {localStorage.getItem("myData")}  <span>&#128512;</span>
 </Nav.Link> 

                        </Nav>
                        </Navbar.Collapse>
                  
                            <Navbar variant="primary" bg="transpernt" expand="lg" >
                                <Container fluid>
                                    <Nav> 
                                        <NavDropdown/>

                                        
                                        <NavDropdown
                                            id="nav-dropdown-primary-example"
                                            title={<span style={{ color: 'white' }}> <i class='fas fa-user'></i>  My Profile</span>}
                                            menuVariant="light">
                                            <NavDropdown.Item onClick={()=>{handleLinkClick('ViewEditTrekker')}}>Your profile</NavDropdown.Item>
                                            <NavDropdown.Item onClick={()=>{Navigate('/')}}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Navbar>
                </Container>
            </Navbar>
            

        <div>
            {renderComponent()}
        </div>
        <Footer/>
        </>
    )
}