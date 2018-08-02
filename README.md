# GoalCoach Application with redux, authentication and a database 

**DESCRIPTION:** 
  - This is a ReactJS Application that allows the Authorized Users to post goals. 
  - The Goals which are already posted are visible as a list of 'Uncompleted Goals' to the remaining authorized  users
  - The users can change the goal status to complete after the goals completion by clicking on complete button.
  - All the completed goals are added into a list of "completed goals".
  - the "completed goals" list contains all the completed goals along with the person's emailid who actually completed that goal
  - the users can also clear the "completed goals" list by clicking on the clear all button provided
 
**FEATURES:**
  - In order to use this application's services, the user has to sign up with this application
  - Enabled Validations to check whether the entered emailid and password are valid or not
  - All the users and reminder data is stored in the database

**TECHNICAL FEATURES:**
  - The application interface renders depending upon the device screen(mobile or web)
  - Designed using **ReactJS Redux** library which uses **Flux concept** for storing and rendering of data globally.
  - Used **google firebase services** for handling authentication, validation and storing data in the database.
  - Hosted this application in **Heroku cloud platform services**
 
**LIBRARIES AND PACKAGES:**
 - **React-Bootstrap:** this is used for setting up of application theme and makes the application responsive based on the device screen
 - **firebase:** used for setting up of the google firebase services
 - **react-router:** used for core routing functionality for React Router, which enables multiple page view for the application
 - **react-redux:** used for storing the data at the root, so the data can be accessed at any component of that application
 
**DEMO LINK(HOSTED IN HEROKU):**
 (https://whispering-bastion-10961.herokuapp.com/)
 
