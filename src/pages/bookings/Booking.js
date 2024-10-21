import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css"


const Booking = (props) => {
  const {    
    owner,
    talk,
    speaker,
    date,
    email,
    start_time,
    end_time,
    questions,
    suggestions,
    created_at,
    updated_at,
  } = props;

  const currentUser = useCurrentUser();
//   const is_owner = currentUser?.username === owner;

    return (
      <Container>
        <Table striped bordered>
              <tbody>
                {talk &&
                  <tr>
                      <td>Talk:</td>
                      <td>{talk}</td>
                  </tr>}
                  {speaker &&
                  <tr>
                      <td>speaker:</td>
                      <td>{speaker}</td>
                  </tr>}
                {date &&
                  <tr>
                      <td>Date:</td>
                      <td>{date}</td>
                  </tr>}
                {start_time &&
                  <tr>
                      <td>Starts at:</td>
                      <td>{start_time}</td>
                  </tr>}            
                {end_time &&
                  <tr>
                      <td>Ends at:</td>
                      <td>{end_time}</td>
                  </tr>}          
                {questions &&
                  <tr>
                      <td>Questions:</td>
                      <td>{questions}</td>
                  </tr>}
                {suggestions &&
                  <tr>
                      <td>Suggestions:</td>
                      <td>{suggestions}</td>
                  </tr>}                  
                </tbody>
          </Table>
          <Container>
            <Link to={{
              pathname: "/bookings/edit",
              state: {
                talk: talk,
                speaker: speaker,
                date: date,
                start_time: start_time,
                end_time: end_time,
              }
            }}>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Talk}`}>
                Edit
            </Button>
            </Link>
          </Container>         
      </Container>
    );
  };

export default Booking;