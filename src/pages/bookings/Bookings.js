import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/Bookings.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import Booking from './Booking';
import NoResults from "../../assets/no-results.png";



function Bookings() {
  const [bookings, setBookings] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axiosReq.get(`/bookings/`);
        setBookings(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchBookings(); 
  }, []);

  return (
    <Container className={styles.Content}>
      <h3>My Bookings</h3>
      <br />      
        {hasLoaded ? (
          <>
            {bookings.results.length ? (
              bookings.results.map((booking) => (
                <Booking key={booking.id} {...booking} setBookings={setBookings} />
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