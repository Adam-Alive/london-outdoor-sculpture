import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../../styles/About.module.css";
import btnStyles from "../../styles/Button.module.css"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const About = () => {
  return (
    <Container className={styles.Content}>
    <h2>About Us</h2>
    <hr />
    <h3>
    All are welcome to view, join and upload images of outdoor sculpture in the Greater London area.
    </h3>
    
    <div>This is the about page!!</div>
    </Container>
  )
}

export default About