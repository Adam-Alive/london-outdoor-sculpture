import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import BookingCreateForm from "./BookingCreateForm";
import appStyles from "../../App.module.css";
import styles from "../../styles/Bookings.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function Bookings() {
    const { id } = useParams();
    const [booking, setBooking] = useState({ results: [] });
  
    const currentUser = useCurrentUser();   
  
    useEffect(() => {
      const handleMount = async () => {
        try {
          const [{ data: booking }] = await Promise.all([
            axiosReq.get(`/bookings/${id}`),            
          ]);
          setBooking({ results: [booking] });         
        } catch (err) {
          console.log(err);
        }
      };
  
      handleMount();
    }, [id]);
  
  
  
    return (
    <Container className={styles.Content}>
    <h3>My Bookings</h3>
    <br />
    </Container>
  )
}

export default Bookings




function PostPage() {
  

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <PopularProfiles mobile />
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
              "Comments"
          ) : null}
            {comments.results.length ? (
              <InfiniteScroll
                children={comments.results.map((comment) => (
                  <Comment
                    key={comment.id}
                    {...comment}
                    setPost={setPost}
                    setComments={setComments}
                  />
                ))}
                dataLength={comments.results.length}
                loader={<Asset spinner />}
                hasMore={!!comments.next}
                next={() => fetchMoreData(comments, setComments)}
              />
            ) : currentUser ? (
              <span>No comments yet, be the first to comment!</span>
            ) : (
              <span>No comments... yet</span>
            )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      <PopularProfiles />
      </Col>
    </Row>
  );
}
