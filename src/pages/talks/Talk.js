import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css"

// Talks are created by an administrator in the API admin panel.

const Talk = (props) => {
  const {
    owner,   
    title,
    speaker,
    date,
    start_time,
    end_time,
    summary,
    id,
    created_at,
    updated_at,
  } = props;

  console.log(id)

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

    return (
      <Container>
        <Table striped bordered>
              <tbody>
                {title &&
                  <tr>
                      <td>Title: {id}</td>
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
          <Container>
            <Link to={{
              pathname: "/bookings/create", 
              state: {
                talk_id: id,
                title: title, // This is the title name. You must also add the title ID
                speaker: speaker,
                date: date,
                start_time: start_time, 
                end_time: end_time,  
              }
            }}>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Talk}`}>
                Register
            </Button>
            </Link>
          </Container>         
      </Container>
    );
  };

export default Talk;

