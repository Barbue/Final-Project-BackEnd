###### ----- Final-Project-Backend ----- #####


### --- Project Overview --- ###

The purpose and goal of this project is to create a ticket tracker application that is similar to, and has some of the same basic functionality of, the JIRA project management software. This software is used by project managers to create tickets and or tasks in order to track the progress of a given project. These tickets include an identifying title and a description of the task(s) at hand. The typical workflow of a project is to assign these tickets/tasks to specific developers on a given team. It is then up to the developer(s) in question to update the ticket status appropriately in relation to their progress on an assigned task to include comments, feedback and or any issues that they may be encountering.  The project managers work with their developers as well as all relevant stakeholders to ensure that these tickets are assigned, changed to the appropriate status where required, and finally resolved, when the task(s) have been completed. 

### --- Technical Stack Needed For This Project --- ###

NodeJS - Runtime
ReactJS - Client Framework
ExpressJS - Server Framework
MongoDB - Database
Git - Code Versioning
GitHub - Code Storage and Collaboration
CORS - Express CORS Library
(Optional) bcryptJS - User Authntication
(Optional) JsonWebToken - User Auth Tokens
(Optional) Bootstrap - CSS Framework
(Optional) Nodemon - Server Hot Reloading
(Optional) React-Router - Client Side Routing
(Optional) uuidv4 - Unique ID Generator
(Optional) axios - Promise Based HTTP Client For The Browser And Node.js

# - Basic Installation FrontEnd:  

npm install
npx create-react-app - Creates React Application
npm install dotenv - Loads Environment Variables From A .env File Into process.env
(Optional) npm install axios 
npm install react-router-dom


# - Basic Installation BackEnd:

npx express-generator
npm install
npm install mongodb
npm install cors
npm install nodemon
npm install dotenv
npm install uuidv4


### --- Basic Functionality Of The Application --- ###


# - Ability To Register And Login - #

- The user will be able to register with the application. 

- Once the user has registered, then they will be able to log into and out of the application. 

# - Ticket Management - #

- The user will be able to create new tickets and edit those that have already been created.

- The user will be able to delete a ticket.

- The user will be able to see a list of their tickets.



### --- Additional Functionality Of The Application --- ###


# - Ability To Register And Login - #

- The user's password will be encrypted via salt+hash algorithm.

- A user ID Token will be generated using JsonWebToken.  The ID Token will persist on the client side with local storage. The client will then check for the existence of the token before prompting the user to authenticate.

- The user will be able to log out of the application and log into it with a different account. 


# - Ticket Management - #

- There will be a page or a modal for users to create new tickets.

- The user will be able to create and edit the following fields in a ticket:

      - title {String}
      - description {String}
      - relatedTicketIds {uuid[]}
      - assignedToUserId {uuid}
      - status {String}
      - createdAt {Date}
      - createdById {uuid}
      - lastModified {Date}
      - lastUpdatedById {uuid}

- The ticket list will be sortable and filterable.
- The ticket list will be paginated.
- If a user clicks a ticket title, it will bring up a quick edit modal of the ticket.





