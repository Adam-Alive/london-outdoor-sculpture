import React from "react";
import Container from "react-bootstrap/Container";
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer>
        <Container fluid className={styles.Content}> 
          <p className={styles.FooterPa}>London Outdoor Sculpture</p>
          <p className={styles.FooterPb}>© 2024 for educational purposes</p> 
        </Container>
    </footer>
  )
}

export default Footer;