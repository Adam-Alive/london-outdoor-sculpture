import React, {useEffect, useState  } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/BookingCreateEditForm.module.css"
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams, useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function BookingEditForm() {

  const location = useLocation()
  const [errors, setErrors] = useState({});

  const [bookingData, setBookingData] = useState({
    talk: location.state?.id,
    speaker: location.state?.speaker,
    date: location.state?.date,
    start_time: location.state?.start_time,
    end_time: location.state?.end_time,
    summary: location.state?.summary,
    questions: "",
    suggestions: "",
  });
  const { talk, speaker, date, start_time, end_time, summary, questions, suggestions } = bookingData;

  const queryParams = new URLSearchParams(location.search);
  const talk_name = queryParams.get('talk_name');
  
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/bookings/${id}/`);
        const { talk, speaker, date, start_time, end_time, summary, questions, suggestions, is_owner } = data;

        is_owner ? setBookingData({ talk, speaker, date, start_time, end_time, summary, questions, suggestions }) : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);   
  
  const handleChange = (event) => {
    setBookingData({
      ...bookingData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("talk", talk);
    formData.append("speaker", speaker);
    formData.append("date", date);
    formData.append("start_time", start_time);
    formData.append("end_time", end_time);
    formData.append("summary", summary);
    formData.append("questions", questions);
    formData.append("suggestions", suggestions);

    // Delete after REQUEST is successful
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    
    try {
      await axiosReq.put(`/bookings/${id}/`, formData);
      history.push(`/bookings/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Talk:</Form.Label>
        <Form.Control
          type="text"
          name="talk"
          value={talk_name}
          onChange={handleChange}
          disabled
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Speaker:</Form.Label>
        <Form.Control
          type="text"
          name="speaker"
          value={speaker}
          onChange={handleChange}
          disabled
        />
      </Form.Group> 

      <Form.Group>
        <Form.Label>Date:</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
          disabled
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Starts at:</Form.Label>
        <Form.Control
          type="time"
          name="start_time"
          value={start_time}
          onChange={handleChange}
          disabled
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Ends at:</Form.Label>
        <Form.Control
          type="time"
          name="end_time"
          value={end_time}
          onChange={handleChange}
          disabled
        />
      </Form.Group>    

      <Form.Group>
        <Form.Label>Summary:</Form.Label>
        <Form.Control
          type="text"
          name="summary"
          value={summary}
          onChange={handleChange}
          disabled
        />
      </Form.Group>     

      <Form.Group>
        <Form.Label>Questions for the speaker:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Optional"
          rows={6}
          name="questions"
          value={questions}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.questions?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Suggestions for future talks:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Optional"
          rows={6}
          name="suggestions"
          value={suggestions}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.suggestions?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}   

      <Button 
        className={`${btnStyles.Button} ${btnStyles.Blue}`} 
        type="submit"
      >
        Submit
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Edit Booking</h3>
      <br />
      <Container className= {`${appStyles.Content} ${styles.FormLabel}`}>
            {textFields}
      </Container>
    </Form>
  );
}

export default BookingEditForm;