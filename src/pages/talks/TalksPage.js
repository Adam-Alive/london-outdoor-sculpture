import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/TalksPage.module.css";

import { Link, useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Talk from "./Talk";
import NoResults from "../../assets/no-results.png";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function TalksPage() {
  const currentUser = useCurrentUser();
  const [talks, setTalks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const { data } = await axiosReq.get(`/talks/`);
        setTalks(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTalks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };    
  }, [pathname]);

  return (
    <Container className={styles.Content}>
      <h3>Online Talks</h3>
      <br />
      <h5>All are welcome to join our monthly online talks with guest speakers covering the many themes relating to public sculpture across London.</h5>
        {!currentUser ? <h5>Please <Link className={styles.TalksLink} to="/signin">sign-in </Link>to register for any talk.</h5> : 
        ""}
      {hasLoaded ? (
          <>
            {talks.results.length ? (
              <InfiniteScroll
                children={talks.results.map((talk) => (
                  <Talk key={talk.id} {...talk} setTalks={setTalks} />
                ))}
                dataLength={talks.results.length}
                loader={<Asset spinner />}
                hasMore={!!talks.next}
                next={() => fetchMoreData(talks, setTalks)}
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

export default TalksPage