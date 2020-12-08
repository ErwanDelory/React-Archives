import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarWeb = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">HAL / arXiv App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">HAL</Nav.Link>
        <Nav.Link href="#link">arXiv</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default NavbarWeb;
