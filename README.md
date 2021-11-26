# Futura Stack
Express + React-Redux + Postgres + nginx

This is more or less a copy of an early version of an older grassroots-project that ultimately failed. Even though the project failed, the boilerplate was too good to be lost (especially since I poured a huge amount of work into it), so here it is.

**There is no license attached, please ask me for permission if you'd like to use this (or be intelligent enough to not have anyone notice). See the disclaimer at the bottom.**

## Development Instructions

### Installation

Prerequisites: Install Nodejs, NPM and Docker (+ docker-compose)

1. Clone the project
2. `npm install` inside frontend and backend
3. for backend, run `npm start`, for frontend run `npm run server` or deploy it with the assistence of the files in the server folder

### Development

1. cd frontend
2. choose one of:
  - `npm run dev` to manually run the build each time you want a change to be shown
  - `npm run watch` to get the changes watched automagically, causing webpack to rebuild on file changes
  - `npm run server` to run the webpack devserver that will also refresh your browser (Recommended)
3. If you also want backend services like the database to run, or you don't want to use the Webpack Devserver (in order to recreate a production environment), go to server and run `[sudo] docker-compose up` in order to spin up all docker containers automagically.

### Docker

To start the nginx and postgresql database:
 - `[sudo] docker-compose up -d`

To connect to the database:
 - `psql -h localhost -U [username] -d [database]`

To stop Docker:
 - `[sudo] docker-compose down`

### Resources

The Frontend Part of the project uses [React](https://reactjs.org/tutorial/tutorial.html), [Redux](https://redux.js.org/basics/basic-tutorial) and [Babel](https://babeljs.io/). Checking out these basic tutorials before starting to work on the project is recommended.

This github repo is using an atomic design for it's file structure and naming conventions: [Atomic Design](https://github.com/danilowoz/react-atomic-design).

### License

Might add one later. For now, don't use this without asking me. For business inquiries, click [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
