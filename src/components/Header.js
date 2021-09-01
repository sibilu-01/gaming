import "./header.css";
import "bootstrap/dist/css/bootstrap.css";

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


function Header () {
    //const history = useHistory();

    function navigateTo(url) {
      //history.push("/" + url);
    }
    return (
      <div className="app">
        <Navbar bg="dark" variant="dark" sticky="bottom" expand="lg" collapseOnSelect>
        
          <Navbar.Brand> <p class = "m-2">Logo</p></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Products">
                <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item href="#products/coffee">
                  Coffee
                </NavDropdown.Item>
                <NavDropdown.Item href="#products/chocolate">
                  Chocolate
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#products/promo">
                  Promotions
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;