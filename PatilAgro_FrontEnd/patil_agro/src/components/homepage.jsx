import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Nav, NavDropdown,Navbar,Container} from "react-bootstrap";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
export default function HomePage(){
    const Navigate = useNavigate();
    const[selectedLink, setSelectedLink] = useState("Home");

    const handleLinkClick = (link)=>{
        setSelectedLink(link);
       // Navigate(`/${link}`)
    };

    useEffect(()=>{
        setSelectedLink('Home')
    },[]);

    const renderComponent = ()=>{
        switch(selectedLink){
          case "Home":
                return <HomePage/>
            case "AboutUs": 
              return <AboutUs/>
            // case "UserLogin":
            //     return <UserLogin/>
            case "ContactUs":
                return <ContactUs/>
          
            default:
              return null;
        }
    }

    return (
        <div>
             <div>
        <header>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg"  >
            <Container>
              <Navbar.Brand href="/"><img src="Patil_agro.jpg" alt="logo" /> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link  onClick={()=>{handleLinkClick('AboutUs')}}>About Us</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('ContactUs')}}>Contact Us</Nav.Link>
                  <Nav.Link  onClick={() => handleLinkClick('UserLogin')}>  <i className='fas fa-user'></i> Sign In</Nav.Link>
                  <NavDropdown
                    id="nav-dropdown-primary-example"
                    title="Register"
                    menuVariant="light">
                    <NavDropdown.Item onClick={()=>{handleLinkClick('ClubRegistration')}}>Customer Login</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=> {handleLinkClick('UserRegistration')}}>Farmer Login </NavDropdown.Item>
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
        </div>
    )
}