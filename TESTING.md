# Testing
 
> Return to the [README.md](README.md) file.
 
## Code Validation
 
### HTML
 
I used the [HTML W3C Validator](https://validator.w3.org) to validate all HTML files.

- Result: Pass, no errors:

 ![screenshot](documentation/images/html.png) 

### CSS
 
I used the [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate the CSS file.

An example of a test for About.module.css is shown here, with full results listed below.
 
![screenshot](documentation/images/css-1.png)

![screenshot](documentation/images/css-2.png) 

 | Filename | Result |
| --- | --- |
|About.module.css |Pass|
|Asset.module.css|Pass|
|Avatar.module.css |Pass|
| BookingCreateEditForm.module.css| Pass|
| Bookings.module.css| Pass|
|Bookings.module.css | Pass|
|Button.module.css| Pass|
|Comment.module.css | Pass|
| CommentCreateEditForm.module.css| Pass|
|Footer.module.css |Pass |
|MoreDropdown.module.css |Pass |
|NavBar.module.css |Pass |
|NotFound.module.css | Pass|
|Post.module.css | Pass|
|PostCreateEditForm.module.css |Pass |
|PostsPage.module.css |Pass |
|Profile.module.css | Pass|
|SignInUpForm.module.css |Pass |
|TalksPage.module.css | Pass|
 
### JSX

All JSX code was passed through [ESLint](https://eslint.org/), installed in my Gitpod workspace and providing real-time validation. 

- Result: Pass, no errors:
 
 ![screenshot](documentation/images/eslint.png) 

## Browser Compatibility

I've tested my deployed project on Chrome, Edge and Safari to check for compatibility issues.
 
I tested each browser on the homepage, and then logged in to view each feature. I have provided a summary of these tests below with a screenshot of the homepage.
 
| Browser | Home | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/images/chrome.png) | Works as expected |
| Edge | ![screenshot](documentation/images/edge.png) | Works as expected |
| Safari | ![screenshot](documentation/images/safari.png) | Works as expected |
 
## Responsiveness
 
I deployed the project early on and tested on three of my own devices throughout the development process:
 
- Moto (g8) power
- HP Desktop (24")
- MacBook Air (13")
 
I also used Dev Tools to test on a tablet device.
 
I tested the responsiveness of each page and have provided a summary of these tests below with a screenshot of the homepage:
 
| Device | Homepage | Notes |
| --- | --- | --- |
| Moto(g8) mobile (own) |![screenshot](documentation/images/phone.png)| Works as expected |
| Tablet (DevTools) |![screenshot](documentation/images/ipad.png) | Works as expected |
| MacBook Air (own) |![screenshot](documentation/images/laptop.jpg) | Works as expected |
| HP Desktop (own) |![screenshot](documentation/images/hp.jpg) | Works as expected |
 
## Lighthouse Audit
 
I tested the deployed project using the Lighthouse Audit tool to check for any major issues and a summary is provided below:
 
| Mobile | Desktop |
| --- | --- |
| ![screenshot](documentation/testing/lighthouse-mobile.png) | ![screenshot](documentation/testing/lighthouse-pc.png) |

## User Story Testing  
I conducted manual tests for user stories and a summary is provided below:

**Epic 1: Authentication**
| User Story | Screenshot |
| --- | --- |
|As a new user, I would like to create an account so that I can access all the features for signed-up users. |![screenshot](documentation/testing/signup.png)  |
| As a user, I would like to sign in so that I can access functionality for signed-in users. |  ![screenshot](documentation/testing/signin.png)|
|  As a user, I would like to know if I am signed-in or not so that I can sign in if necessary. |![screenshot](documentation/testing/logged-in.png)  |
|  As a user, I would like to sign out so that I know my session has been closed securely. | ![screenshot](documentation/testing/signout-1.png)  ![screenshot](documentation/testing/signout-2.png)|

**Epic 2: Navigation**
| User Story | Screenshot |
| --- | --- |
| As a user, I would like to view a navbar from every page so that I can navigate seamlessly between pages. | ![screenshot](documentation/testing/navbar-1.png) |
|  As a signed-out user, I would like to see sign-in and signup options so that I can sign in/sign up. | ![screenshot](documentation/testing/navbar-2.png) |

**Epic 3: Add and Like Posts**
| User Story | Screenshot |
| --- | --- |
|  As a logged-in user, I would like to create a post to share on the platform so that I can engage with other users. |  ![screenshot](documentation/testing/add-image-1.png) ![screenshot](documentation/testing/add-image-2.png)|
| As a logged-in user, I would like to edit my posts so that I can change or update them after their creation. |![screenshot](documentation/testing/edit-post.png)  |
|  As a logged-in user, I would like to like/unlike a post so that I can show my appreciation of the content. | ![screenshot](documentation/testing/like.png) |
|   As a logged-in user, I would like to view all posts I have liked so that I can scroll through my favourite content. |  ![screenshot](documentation/testing/liked.png) |

**Epic 4: View Posts**
| User Story | Screenshot |
| --- | --- |
|   As a user, I would like to scroll continuously through the posts on any given page so that I can view them without interruption. | ![screenshot](documentation/testing/scroll-1.png) ![screenshot](documentation/testing/scroll-2.png) |
|  As a user, I would like to view the most recent posts first so that I am up to date with the latest content. | ![screenshot](documentation/testing/date.png) |
|   As a user, I would like to search for posts with keywords so that I can find posts and user profiles that most interest me. |  ![screenshot](documentation/testing/search-1.png) |
|  As a user, I would like to view the details of a single post so that I can learn more about it. |![screenshot](documentation/testing/post.png)  |
|  As a logged-in user, I would like to view posts filtered by users I follow so that I can keep up-to-date with their content. | ![screenshot](documentation/testing/feed.png) |

**Epic 5: Profiles**
| User Story | Screenshot |
| --- | --- |
| As a user, I would like to view other users’ profiles so that I can see their posts and learn more about them. | ![screenshot](documentation/testing/vila.png) |
| As a user, I would like to view a list of the most followed profiles so that I can see which are the most popular. |![screenshot](documentation/testing/profiles.png)  |
|  As a user, I would like to see all the published posts by a specific user so that I can review their post history. | ![screenshot](documentation/testing/vila-2.png) |
|   As a logged-in user, I would like to follow/unfollow other users so that I can see and remove posts by specific users in my post feed. |  ![screenshot](documentation/testing/follow.png) |
|  As a logged-in user, I would like to edit my profile so that I can keep my details up to date. |![screenshot](documentation/testing/profile-edit.png)  |
|  As a logged-in user, I would like to update my username/password so that I can make changes and keep my account secure. | ![screenshot](documentation/testing/username.png) ![screenshot](documentation/testing/password.png) |
|  As a user, I would like to see stats on a specific user’s profile so I can know how many posts they have made, followers they have, and how many users they are following. | ![screenshot](documentation/testing/jenna.png) |

**Epic 6: Comments**
| User Story | Screenshot |
| --- | --- |
|  As a user, I would like to view comments by other users so that I can know what they think about posts. |![screenshot](documentation/testing/comment.png)  |
|   As a user, I would like to see how long ago a comment was made so that I know how old it is. | See above.  |
|  As a logged-in user, I would like to comment on a post so that I can share my thoughts about its content. | ![screenshot](documentation/testing/comment-make.png) |
|   As a logged-in user, I would like to edit any comment I have made so that I can update its content. |  ![screenshot](documentation/testing/comment-edit-2.png)|
|   As a logged-in user, I would like to delete any comment I have made so that I can remove it from the site. | ![screenshot](documentation/testing/comment-edit-1.png) |

**Epic 7: Online Talk Events**
| User Story | Screenshot |
| --- | --- |
|   As an administrator, I would like to create an Online Talk event so that I can publish it on the talks page. | ![screenshot](documentation/testing/talk-1.png)  ![screenshot](documentation/testing/talk-2.png)  ![screenshot](documentation/testing/talk-3.png) |
|   As an administrator, I would like to edit and delete an Online Talk event so that I can amend details and remove the event if necessary. |![screenshot](documentation/testing/talk-4.png)  |
|   As a user, I would like to view all Online Talk events so that I can browse upcoming Online Talks. | ![screenshot](documentation/testing/talks.png) |
|   As a logged-in user, I would like to submit a booking for an Online Talk event so that I can learn about my areas of interest. | ![screenshot](documentation/testing/talk-booking.png) |
|   As a logged-in user, I would like to view, edit and delete my bookings for Online Talk events so that I can check and change my bookings if necessary. |  ![screenshot](documentation/testing/my-bookings.png)  ![screenshot](documentation/testing/edit-booking.png)|

**Epic 8: Site Administration**
| User Story | Screenshot |
| --- | --- |
| As an administrator, I would like to access the administrator panel so that I can monitor and delete posts, comments and users if necessary. | ![screenshot](documentation/testing/admin-page.png) |

**Additional tests for Infinite Scroll**
| Page | Screenshot |
| --- | --- |
| Talks. | ![screenshot](documentation/bugs/scroll-talks.png) |
| Bookings. | ![screenshot](documentation/bugs/scroll-bookings.png) |
| Comments. | ![screenshot](documentation/bugs/scroll-comments.png) |
 
 
 ## React Unit Testing

 I conducted a series of automated tests on the NavBar.js component (see: [NavBar.test.js](https://github.com/Adam-Alive/london-outdoor-sculpture/blob/main/src/components/__tests__/NavBar.test.js)) and acknowledge that, in a real-world scenario, an extensive set of additional tests would be required.

 - Result: Pass, no errors:

 ![screenshot](documentation/images/navbar-test.png) 
 
 ## Bugs
 
 - **Issue:** Issue with manifest in the console at start up:

 ![screenshot](documentation/bugs/bug-2.png)
  
 - **Fix:** Consultatation with Code Institute's tutor support revealed that I needed to update the manifest.json file:

 ![screenshot](documentation/bugs/bug-3.png)

 - **After fix :**

 ![screenshot](documentation/bugs/bug-4.png)

## Unfixed Bugs

 - **Duplicate bookings.**

  - When making a booking, a logged-in user is able to book a talk more than once. To resolve this, I explored the use of unique_together in the Booking model in the API, based upon the logic used to prevent duplicate likes and followers in the Like and Follower models respectively. I used the booking 'owner' and 'title' as the constraint fields:

 ![screenshot](documentation/bugs/booking-bug.png)

 - This initially appeared to work in the development API, resulting in the expected "detail: possible duplicate" message set up in the bookings serializers:

 ![screenshot](documentation/bugs/booking-bug-1.png)

- However, once passed through to the front-end, the result was that only one booking was possible for one talk ie. only one user could book a particular talk and then no other users. I spent considerable time in trying to resolve this - and tried other constraint fields - but then needed to prioritise other areas of the project. This is something that I can explore in a future iteration and as part of my learning and development.


