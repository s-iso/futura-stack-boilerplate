## Development Instructions

### Installation

Prerequisites: Install Nodejs, NPM and Docker (+ docker-compose)

1. Clone the project
2. cd frontend
3. `npm install`

### Development

1. cd frontend
2. choose one of:
  - `npm run dev` to manually run the build each time you want a change to be shown
  - `npm run watch` to get the changes watched automagically, causing webpack to rebuild on file changes
  - `npm run server` to run the webpack devserver that will also refresh your browser (Recommended)
3. If you also want backend services like the database to run, or you don't want to use the Webpack Devserver (in order to recreate a production environment), go to document root and run `[sudo] docker-compose up` in order to spin up all docker containers automagically.

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
