import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../login/login';

function NavbarProyect() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className="navbar-brand">Navbar</Link>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/rick-and-morty" className="nav-link">Cards</Link>
            <Nav.Link href="#pricing" onClick={handleShowLoginModal}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Login show={showLoginModal} setShow={setShowLoginModal} />
    </>
  );
}

export default NavbarProyect;
