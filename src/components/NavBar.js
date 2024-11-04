import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

// See previous commits for refactoring into useClickOutsideToggle hook
  const {expanded, setExpanded, ref} = useClickOutsideToggle();
  
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="Add image"
      to="/posts/create"
    >
      <i className="far fa-plus-square"></i>Add image
      </NavLink>
  )

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        aria-label="Bookings"
        to="/bookings"
      >
        <i className="fa-solid fa-hand"></i>Bookings
      </NavLink>
      
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        aria-label="Feed"
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        aria-label="Liked"
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink 
        className={styles.NavLink}
        aria-label="Sign out"
        to="/" 
        onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        aria-label="Profile"
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (  
  <>       
      <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="Sign in"
      to="/signin"
    >
      <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        aria-label="Sign up"
        to="/signup"        
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );
    
  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.NavbarBrand}>
            <img src={logo} alt="logo" height="80" />
            {currentUser? <span></span> : <span>      
              <span className={styles.SpanA}>London</span>
              <span className={styles.SpanB}>Outdoor</span>
              <span className={styles.SpanC}>Sculpture</span>
            </span>}
                    
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              aria-label="Home page"
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              aria-label="About page"              
              to="/about">
              <i className="fa-brands fa-readme"></i>About
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              aria-label="Talks page"              
              to="/talks">
              <i className="fa-solid fa-person-chalkboard"></i>Talks
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;