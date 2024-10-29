import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer>
        <Container fluid>
            <Row className={styles.Row}>
                <NavLink to="/">                
                </NavLink>                
                Footer Section
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;