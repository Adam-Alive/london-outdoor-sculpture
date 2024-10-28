
// // Test for BookingPage.js

// import React, { useEffect, useState } from "react";

// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// import appStyles from "../../App.module.css";
// import { useParams } from "react-router-dom";
// import { axiosReq } from "../../api/axiosDefaults";
// import Booking from "./Booking";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";

// // import InfiniteScroll from "react-infinite-scroll-component";
// // import Asset from "../../components/Asset";
// // import { fetchMoreData } from "../../utils/utils";

// function BookingPage() {
//     const { id } = useParams();
//     const [booking, setBooking] = useState({ results: [] });
  
//     const currentUser = useCurrentUser();
//     const profile_id = currentUser?.profile_id;
//     // See ProfileEditForm Line 39 to validate booking / profile_id

//     useEffect(() => {
//         const handleMount = async () => {
//           try {
//             const [{ data: booking }] = await Promise.all([
//               axiosReq.get(`/bookings/${id}`),              
//             ]);
//             setBooking({ results: [booking] });          
//           } catch (err) {
//             console.log(err);
//           }
//         };
    
//         // Take this from BookingEditForm line 38 and try!!
//          const { data } = await axiosReq.get(`/bookings/${id}/`);


//         handleMount();
//       }, [id]);

//     return (
//     <Container className={styles.Content}>
//       <h3>My Bookings</h3>
//       <br />      
//         {hasLoaded ? (
//           <>
//             {booking.results.length ? (
//               booking.results.map((booking) => (
//                 <Booking key={booking.id} {...booking} setBookings={setBooking} bookings={bookings} />
//               ))
//             ) : (
//               <Container className={appStyles.Content}>
//                 <Asset src={NoResults} />
//               </Container>
//             )}
//           </>
//         ) : (
//           <Container className={appStyles.Content}>
//             <Asset spinner />
//           </Container>
//         )}  
//     </Container>
//   );
// };

// export default BookingPage;