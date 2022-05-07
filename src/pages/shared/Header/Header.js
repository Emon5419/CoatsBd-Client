import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
   return (

      <Navbar className='navbar' sticky='top' bg="primary" variant="dark">
         <Container>
            <img src={logo} alt="" />
            <Navbar.Brand className='ms-2' href="/home">Coats Bangladesh</Navbar.Brand>
            <Nav className="ms-auto">
               <Nav.Link href="/home">Home</Nav.Link>
               <Nav.Link href="/blogs">Blogs</Nav.Link>
               <Nav.Link href="/inventory">Inventory</Nav.Link>
               <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
         </Container>
      </Navbar>

   );
};

export default Header;