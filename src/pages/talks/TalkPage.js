import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Talk from "./Talk";

function TalkPage() {
  const { id } = useParams();
  const [talk, setTalk] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: talk }] = await Promise.all([
          axiosReq.get(`/talks/${id}`),
        ]);
        setTalk({ results: [talk] });
        console.log(talk);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* <p>Popular profiles for mobile</p> */}
        <Talk {...talk.results[0]} setTalks={setTalk} talkPage />
        {/* <Container className={appStyles.Content}>Comments</Container> */}
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default TalkPage;