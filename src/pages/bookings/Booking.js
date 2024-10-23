import React from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css"

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";


const Booking = (props) => {
  const {    
    id,
    owner,
    // talk,
    talk_name,
    speaker,
    date,
    start_time,
    end_time,
    summary,
    questions,
    suggestions,
    bookings,
  } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
      history.push(`/bookings/${id}/edit`);
    };
  
    const handleDelete = async () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
      if (confirmDelete) {
        try {
          await axiosRes.delete(`/bookings/${id}`);
          history.goBack();
        } catch (err) {
          // console.log(err);
        }
      }
    }

    return (
      <Container>
        <Table striped bordered>
              <tbody>
                {talk_name &&
                  <tr>
                      <td>Talk:</td>
                      <td>{talk_name}</td>
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
                  {summary &&
                  <tr>
                      <td>Summary:</td>
                      <td>{summary}</td>
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
            <Button 
                className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Talk}`} type="submit"
                onClick={handleEdit}>
                Edit
            </Button>
            <Button 
                className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Talk}`}
                onClick={handleDelete}>
                Delete
            </Button>
          </Container>         
      </Container>
    );
  };

export default Booking;
