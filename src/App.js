import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import { Route, Switch, Redirect } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import TalksPage from "./pages/talks/TalksPage";
import BookingCreateForm from "./pages/bookings/BookingCreateForm";
import Bookings from "./pages/bookings/Bookings";
import BookingEditForm from "./pages/bookings/BookingEditForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import About from "./pages/about/About";
import NotFound from "./components/NotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (    
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => (
                <PostsPage message="No results found. Adjust the search keyword." />)} 
              />
              <Route exact path="/feed" render={() => (
                <PostsPage 
                  message="No results found. Adjust the search keyword or follow a user."
                  filter={`owner__followed__owner__profile=${profile_id}&`} 
                />)} 
              />
              <Route exact path="/liked" render={() => (
                <PostsPage
                  message="No results found. Adjust the search keyword or like a post."
                  filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                />)}
              />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />      
              <Route exact path="/talks/" render={() => <TalksPage />} />            
              <Route exact path="/bookings/create">
                {!currentUser ? <Redirect to="/signin" /> : <Route exact path="/bookings/create" render={() => <BookingCreateForm />} />}
              </Route>
              <Route exact path="/bookings/" render={() => <Bookings />} />
              <Route exact path="/bookings/:id" render={() => <Bookings />} />
              <Route exact path="/bookings/:id/edit" render={() => <BookingEditForm />} />
              <Route exact path="/about/" render={() => <About /> } />
              <Route render={() => <NotFound />} />
            </Switch>
          </Container>
          <Footer />
        </div>
     );
}

export default App;