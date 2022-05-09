import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {
   const [user] = useAuthState(auth);

   const handleSignOut = () => {
      signOut(auth);
   }

   return (

      <Navbar className='navbar' sticky='top' bg="primary" variant="dark">
         <Container>
            <img src={logo} alt="" />
            <Navbar.Brand className='ms-2' href="/home">Coats Bangladesh</Navbar.Brand>

            <Nav className="ms-auto">
               <Nav.Link href="/home">Home</Nav.Link>
               <Nav.Link href="/blogs">Blogs</Nav.Link>
               <Nav.Link href="/inventory">Inventory</Nav.Link>
               {
                  user ?
                     <button className='border-0 text-white btn btn-outline-danger' onClick={handleSignOut}>Sign out</button>
                     :
                     <Nav.Link to="/login">Login</Nav.Link >
               }
            </Nav>

         </Container>
      </Navbar>

   );
};

export default Header;