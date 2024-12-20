import React from 'react'
import Container from "react-bootstrap/Container";
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <Container className={styles.Content}>
    <h3>About Us</h3>
    <br />
    <h5>
      All are welcome to view, join and upload images of outdoor sculpture in the Greater London area.
    </h5>    
    <h5>
      Just three rules:
    </h5>
    <ol>
      <li>
      All sculptures must be located in one of the <a href="https://directory.londoncouncils.gov.uk/" target="_blank" rel="noreferrer"
      className={styles.Borough} aria-label="A directory of London boroughs (opens in a new tab)">33 London Boroughs</a> which make up Greater London.
      </li>
      <li>
      All sculptures must be outdoors, in a public space, and freely available to all. They may be on permanent or temporary display. <br />  
      Sculptures inside railway stations are acceptable &ndash; Paddington fans take note!
      </li>
      <li>
      We define "sculpture" as a three-dimensional object in any medium.
      </li>
    </ol>
    <h5>
      Guidelines:
    </h5>   
    <p>
      Please include as much of the following information as you can:
    </p>
    <ul>
      <li>
        Title and artist.
      </li>
      <li>
         Street name.
      </li>
      <li>
        First part of the postcode eg. W10, SW15 &ndash; you may find this on a street sign nearby.
      </li>
      <li>
        Name of the borough eg. Lambeth, Westminster, Brent etc.
      </li>
    </ul>
    <p>
      We know that this information is not always available so don't worry &ndash; the picture is the main thing!
    </p>    
    </Container>
  )
}

export default About;