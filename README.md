# movie-database-service

Backend service for interacting with the movie database API

# Installation steps
1. Run `npm install` to install all dependencies.
2. If this is your first time initializing, seed the database with `npm run seed`. This will create a mongo db database with a user collection and a session collection, which are both used for the implemented light authentication.
3. Run `npm run build` to transpile and bundle the react frontend for viewing the returned entries from your queries.
4. Run `npm run start` to initialize the server, which both serves the frontend, and provides a connection to the mongodb so that passwords may be validated, and session information can be tracked with the required Bearer token necessary for the chosen API.
5. Navigate your browser to `http://localhost:3000` to find the login page.
6. For this example, the credentials are simply `admin` and `password`.
7. By default, "Harry Potter" has been queried to render some tiles to the page. Change the query and you will see the results update in real time.
8. Enjoy.
9. Note: If you are unable to log in, make sure you have completed Step #2.