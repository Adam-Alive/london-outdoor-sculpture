import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { axiosRes } from "../../api/axiosDefaults";
import { Container } from "react-bootstrap";

// Talks are created by an administrator in the API admin panel.

const Talk = (props) => {
  const {
    id,
    owner,   
    title,
    speaker,
    date,
    start_time,
    end_time,
    summary,
    created_at,
    updated_at
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

    return (
      <Container>
        <Table striped bordered>
              <tbody>
                {title &&
                  <tr>
                      <td>Title:</td>
                      <td>{title}</td>
                  </tr>}
                {speaker &&
                  <tr>
                      <td>Speaker:</td>
                      <td>{speaker}</td>
                  </tr>}
                {date &&
                  <tr>
                      <td>Date:</td>
                      <td>{date}</td>
                  </tr>}
                {start_time && end_time &&
                  <tr>
                      <td>Time:</td>
                      <td>{start_time} to {end_time}</td>
                  </tr>}
                {summary && 
                  <tr>
                      <td>Summary:</td>
                      <td>{summary}</td>
                  </tr>}       
                </tbody>
          </Table>        
          <Button variant="primary">Register</Button>
        </Container>
  );
};

export default Talk;