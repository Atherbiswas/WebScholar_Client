import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../site-logo.png'


const Header = () => {
    return (
        <Navbar bg="info" expand="lg" className='sticky-top'>
      <Container>
        <Navbar.Brand to="/">
            <Image style={{width: '35px'}} roundedCircle src={logo}></Image>
            WEBSCHOLAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto anchor">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;