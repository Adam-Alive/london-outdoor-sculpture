import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function PostEditForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    artist: "",
    street: "",
    postcode: "",
    borough: "",
    image: "",
  });
  const { title, artist, street, postcode, borough, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { title, artist, street, postcode, borough, image, is_owner } = data;

        is_owner ? setPostData({ title, artist, street, postcode, borough, image }) : history.push("/");
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("street", street);
    formData.append("postcode", postcode);
    formData.append("borough", borough);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/posts/${id}/`, formData);
      history.push(`/posts/${id}`);
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
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((_message, idx) => (
        <Alert variant="warning" key={idx}>
          Entry required - use 'unkown' if necessary.
        </Alert>
      ))}

<Form.Group>
        <Form.Label>Artist</Form.Label>
        <Form.Control
          type="text"
          name="artist"
          value={artist}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.artist?.map((_message, idx) => (
        <Alert variant="warning" key={idx}>
          Entry required - use 'unkown' if necessary.
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Street</Form.Label>
        <Form.Control
          type="text"
          name="street"
          value={street}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.street?.map((_message, idx) => (
        <Alert variant="warning" key={idx}>
          Entry required - use 'unkown' if necessary.
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Postcode</Form.Label>
        <Form.Control
          type="text"
          name="postcode"
          value={postcode}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.postcode?.map((_message, idx) => (
        <Alert variant="warning" key={idx}>
          Entry required - use 'unkown' if necessary.
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Borough</Form.Label>
        <Form.Control
          type="text"
          name="borough"
          value={borough}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.borough?.map((_message, idx) => (
        <Alert variant="warning" key={idx}>
          Entry required - use 'unkown' if necessary.
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((_message, idx) => (
              <Alert variant="warning" key={idx}>
                Please use a recognised image file format.
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostEditForm;