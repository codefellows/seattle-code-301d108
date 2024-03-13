import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import './BestBooks.css'; // Import custom CSS file

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="navbar-brand-custom">My Favorite Books</Navbar.Brand> {/* Assign the class name */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <CSSTransition timeout={300} classNames="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </CSSTransition>
            {/* Placeholder for other navigation links */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
