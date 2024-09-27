import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/TalksPage.module.css";

import { useLocation } from "react-router-dom";
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
  <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8}>
      <p>Popular profiles mobile</p>
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
    </Col>
    <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
      <p>Popular profiles for desktop</p>
    </Col>
  </Row>
   );
  }

export default TalksPage