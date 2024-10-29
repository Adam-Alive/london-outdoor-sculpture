import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <footer>
        <Container fluid>
            <Row className="bg-primary text-white">
                <NavLink to="/">                
                </NavLink>                
                Footer Section
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;