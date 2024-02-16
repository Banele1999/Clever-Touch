import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import file from '../assests/file.png';
import home from '../assests/home.png';
import notes from '../assests/notes.png';

//CREATE FUNCTIONAL COMPONENT
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    // className="bg-body-tertiary"

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">Clever Touch</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggle-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar'} onClick={() => onUpdateActiveLink('notes')}>Home</Nav.Link>
                <Nav.Link href="#notes" className={activeLink === 'notes' ? 'active navbar-link' : 'navbar'} onClick={() => onUpdateActiveLink('notes')}>Notes</Nav.Link>
                <Nav.Link href="#file" className={activeLink === 'file' ? 'active navbar-link' : 'navbar'} onClick={() => onUpdateActiveLink('file')}>File</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='icon'>
                    <a href='#'><img src={home} alt='' /></a>
                    <a href='#'><img src={notes} alt='' /></a>
                    <a href='#'><img src={file} alt='' /></a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
