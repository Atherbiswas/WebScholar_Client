import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../site-logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
  const {user} = useContext(AuthContext);
    return (
        <Navbar bg="info" expand="lg" className='sticky-top'>
      <Container>
        <Navbar.Brand to="/">
            <Image style={{width: '35px'}} roundedCircle src={logo}></Image>
            <Link className='btn btn-info fw-bold fs-4' to='/'>WEBSCHOLAR</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto anchor">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <span>{user?.displayName}</span>
            <span>
              {user?.photoURL? <Image style={{height: '30px'}} roundedCircle src={user?.photoURL}></Image> : <FaUserAlt></FaUserAlt>  }
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;