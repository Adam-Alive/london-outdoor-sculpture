import React, {useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/BookingCreateEditForm.module.css"
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function BookingCreateForm() {

  const location = useLocation()
  const [errors, setErrors] = useState({});
  useRedirect('loggedOut');

  const [bookingData, setBookingData] = useState({  
    title: location.state?.title,
    speaker: location.state?.speaker,
    date: location.state?.date,
    start_time: location.state?.start_time,
    end_time: location.state?.end_time,
    summary: location.state?.summary,
    questions: "",
    suggestions: "",
  });
  const { title, speaker, date, start_time, end_time, summary, questions, suggestions } = bookingData;  

  const history = useHistory();

  const handleChange = (event) => {
    setBookingData({
      ...bookingData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
   
    formData.append("title", title);
    formData.append("speaker", speaker);
    formData.append("date", date);
    formData.append("start_time", start_time);
    formData.append("end_time", end_time);
    formData.append("summary", summary);
    formData.append("questions", questions);
    formData.append("suggestions", suggestions);
      
    try {
      const { data } = await axiosReq.post("/bookings/", formData);
      history.push(`/bookings/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
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
      <Container className= {`${appStyles.Content} ${styles.FormLabel}`}>
      {textFields}
      </Container>
    </Form>
  );
}

export default BookingCreateForm;
