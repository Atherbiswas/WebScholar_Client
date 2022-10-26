import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../site-logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
  const {user,logout} = useContext(AuthContext);

  const handleLogout = () => {
      logout()
      .then( () => {})
      .catch( error => console.error(error))
  }
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
            <NavLink>
              {
                user?.uid ?
                <>
                <span>{user?.displayName}</span>
                <Button onClick={handleLogout} variant="warning">Logout</Button>
                </> :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </>
              }
              </NavLink>
            <span className='mt-2'>
              {user?.photoURL? <Image style={{height: '30px'}} roundedCircle src={user?.photoURL}></Image> : <FaUserAlt></FaUserAlt>  }
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;