import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Table from "react-bootstrap/Table";
import styles from "../../styles/Post.module.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

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
    <Card className={styles.Talk}>   
      <Card.Body>
        <h1>Text from Talk.js</h1>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {speaker && <Card.Text>{speaker}</Card.Text>}
        {date && <Card.Text>{date}</Card.Text>}   
        {start_time && <Card.Text>{start_time}</Card.Text>}
        {end_time && <Card.Text>{end_time}</Card.Text>}
        {summary && <Card.Text>{summary}</Card.Text>}
       
      </Card.Body>
    </Card>
  );
};

export default Talk;