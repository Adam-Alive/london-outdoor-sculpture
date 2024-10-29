import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/Bookings.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Booking from './Booking';
import NoResults from "../../assets/no-results.png";

function Bookings() {
  const currentUser = useCurrentUser();
  // const is_owner = currentUser?.username === owner;
  const { id } = useParams();
  const history = useHistory();
  
  const [bookings, setBookings] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/bookings/?owner__profile=${id}`);
          setBookings(data);
          setHasLoaded(true);
          console.log(data);
        } catch (err) {
          console.log(err);
        } 
      } else {
        history.push("/");
      }
      };
    setHasLoaded(false);
    fetchBookings(); 
  }, [currentUser?.profile_id, history, id]);

  return (
    <Container className={styles.Content}>
      <h3>My Bookings</h3>
      <br />      
        {hasLoaded ? (
          <>
            {bookings.results.length ? (
              bookings.results.map((booking) => (
                <Booking key={booking.id} {...booking} setBookings={setBookings} bookings={bookings} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}  
    </Container>
  );
}

export default Bookings;