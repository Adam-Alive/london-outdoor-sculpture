import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/TalksPage.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import Talk from "./Talk";
import NoResults from "../../assets/no-results.png";


function TalksPage() {
  const [talks, setTalks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const { data } = await axiosReq.get(`/talks/`);
        setTalks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchTalks(); 
  }, []);
  

  return (
    <Container ClassName={styles.Any}>
      <h3>Online Talks</h3>
      <br />
      <h5>All are welcome to join our monthly online talks with guest speakers covering the many themes relating to public sculpture across London.</h5>
      <h5>Please sign-up to register for any talk.</h5>
        {hasLoaded ? (
          <>
            {talks.results.length ? (
              talks.results.map((talk) => (
                <Talk key={talk.id} {...talk} setTalks={setTalks} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}  
    </Container>
  );
}

export default TalksPage