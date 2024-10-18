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

  // https://www.daggala.com/passing-props-through-link-in-react-router/
  const location = useLocation()

  const [errors, setErrors] = useState({});
  useRedirect('loggedOut');

  const [bookingData, setBookingData] = useState({
    talk: location.state?.title,
    name: "",
    email: "",
    questions: "",
    suggestions: "",
  });
  // const { talk, name, email, questions, suggestions } = bookingData;

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

    // owner is missing
    formData.append("owner", "Testing123")
    formData.append("talk", bookingData.talk);
    formData.append("name", bookingData.name);
    formData.append("email", bookingData.email);
    formData.append("questions", bookingData.questions);
    formData.append("suggestions", bookingData.suggestions);    

    // Delete this after your REQUEST is successful
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    
    try {
      const { data } = await axiosReq.post("/bookings/", formData);
      console.log(data)
      // history.push(`/bookings/${data.id}`);
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
          value={bookingData.talk}
          onChange={handleChange}
          disabled
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={bookingData.name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email address"
          name="email"
          value={bookingData.email}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Questions for the speaker:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Optional"
          rows={6}
          name="questions"
          value={bookingData.questions}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Suggestions for future talks:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Optional"
          rows={6}
          name="suggestions"
          value={bookingData.suggestions}
          onChange={handleChange}
        />
      </Form.Group>    

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
      <Container className= {`${appStyles.Content} ${styles.FormLabel}`}>{textFields}</Container>
    </Form>
  );
}

export default BookingCreateForm;