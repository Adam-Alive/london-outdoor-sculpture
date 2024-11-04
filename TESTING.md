# Testing
 
> Return to the [README.md](README.md) file.
 
## Code Validation
 
### HTML TBC!!!!!!!!!!
 
I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all HTML files.

### CSS TBC!!!!!!!!!!
 
I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate the CSS file.
 
- Result: Pass, no errors:
 
 ![screenshot](documentation/validation/css.png) 
 
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
 
| Device | Home | Notes |
| --- | --- | --- |
| Moto(g8) mobile (own) | ![screenshot](documentation/images/phone.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/images/ipad.png) | Works as expected |
| MacBook Air (own) | ![screenshot](documentation/images/laptop.jpg) | Works as expected |
| HP Desktop (own) | ![screenshot](documentation/images/hp.jpg) | Works as expected |
 
## Lighthouse Audit
 
I tested the deployed project using the Lighthouse Audit tool to check for any major issues and a summary is provided below:
 
| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![screenshot](documentation/screens/m-home.png) | ![screenshot](documentation/screens/d-home.png) |
| Bookings | ![screenshot](documentation/screens/m-bookings.png) | ![screenshot](documentation/screens/d-bookings.png) | |
| FAQS | ![screenshot](documentation/screens/m-faqs.png) | ![screenshot](documentation/screens/d-faqs.png) |
| Gallery| ![screenshot](documentation/screens/m-gallery.png) | ![screenshot](documentation/screens/d-gallery.png) |
| Network| ![screenshot](documentation/screens/m-network.png) | ![screenshot](documentation/screens/d-network.png) |
| Logout | ![screenshot](documentation/screens/m-logout.png) | ![screenshot](documentation/screens/d-logout.png) |

 ## User Story Testing
  
 I conducted manual tests for user stories and a summary is provided below:
  
 | User Story | Screenshot |
 | --- | --- |
 | As a new user, I would like to land on an informative and engaging home page so that I can learn about the club.| ![screenshot](documentation/features/home-non-member.png) |
 |  As a new user, I would like to submit my contact details so that I can register my membership. | ![screenshot](documentation/features/register.png) |
 |  As a member, I would like to enter my login details so that I can access the members' area. | ![screenshot](documentation/features/login.png) |
 |  As a member, I would like to logout so that I can know my session has been closed securely. | ![screenshot](documentation/features/logout-1.png) ![screenshot](documentation/features/logout-2.png) |
 |  As a member, I would like to submit a question for display on the FAQs page.| A 'could have' not completed during this iteration. |
 |  As a member, I would like to book a practice session so that I can attend at a time that suits me. | ![screenshot](documentation/features/bookings.png) |
 |  As a member, I would like to amend or cancel a practice session so that I can change my plans. | ![screenshot](documentation/features/bookings-my-bookings.png) |
 | As a member, I would like to know if the booking time I want is available so that I can make another choice if necessary. | A 'could have' not completed during this iteration.|
 |  As a member, I would like to add images to the gallery so that I can share my curling experiences with other members. | ![screenshot](documentation/features/gallery-upload.png)  ![screenshot](documentation/features/gallery-my-pictures.png) |
 | As a site administrator, I would like to access the administrator panel so that I can manage the club membership and site's pages. | ![screenshot](documentation/features/admin-1.png) ![screenshot](documentation/features/admin-2.png)  |
 |  As a site administrator, I would like to know when a new member has registered so that I can email them about their membership options. | A 'won't have' not completed during this iteration. |
 |  As a site administrator, I would like to manage content on the FAQs page so that I can provide information to members.| ![screenshot](documentation/features/faqs-1.png) ![screenshot](documentation/features/faqs-2.png) ![screenshot](documentation/features/faqs-3.png)|
 |  As a site administrator, I would like to approve or delete images added to the gallery so that I can filter out any objectionable material.| ![screenshot](documentation/features/admin-gall-1.png) ![screenshot](documentation/features/admin-gall-2.png)|
 |  As a site administrator, I would like to manage content on the curling network page so that I can keep members informed of other curling venues. | ![screenshot](documentation/features/admin-net-1.png)  ![screenshot](documentation/features/admin-net-2.png)|
  
 ## Automated Testing
  
 I conducted a series of automated tests on my application and acknowledge that, in a real-world scenario, an extensive set of additional tests would be required.
 
 ## Bugs
 
 - **Issue:** Favicon only showing on home page.
  
 - **Fix:** Research on Stack Overflow suggested I link to the favicon from the base.html using Django template language, rather than html, and this solved the problem:

    **Before:**

    **After:**

## Unfixed Bugs

Duplicate bookings.
