import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/Bookings.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Booking from './Booking';
import NoResults from "../../assets/no-results.png";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function Bookings() {
  const currentUser = useCurrentUser();
  const { id } = useParams();
   
  const [bookings, setBookings] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchBookings = async () => {  
        try {
          const { data } = await axiosReq.get(`/bookings/?owner__profile=${currentUser?.profile_id}`);
          setBookings(data);
          setHasLoaded(true);    
        } catch (err) {
          console.log(err);
        } 
      };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchBookings(); 
    }, 1000);
    return () => {
      clearTimeout(timer);
    };    
  }, [currentUser?.profile_id, id, pathname]);

  return (
    <Container className={styles.Content}>
      <h3>My Bookings</h3>
      <br />      
        {hasLoaded ? (
          <>
            {bookings.results.length ? (
              <InfiniteScroll              
                children={bookings.results.map((booking) => (
                  <Booking key={booking.id} {...booking} setBookings={setBookings} bookings={bookings} />
                ))}
                dataLength={bookings.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!bookings.next}
                  next={() => fetchMoreData(bookings, setBookings)}
              />
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