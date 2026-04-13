# Bouldering session logger.

## Table of contents

- [About](#about)
- [Features](#features)
- [API](#api)
- [TODO](#todo)

## About

[deployed link](https://bouldering-tracker.onrender.com/)

Bouldering session logger, which allows users to log their climbing
sessions, track their progress for now. In the future share their achievements with friends.
The application is built in pure CSS/HTML/JS with the use of dynamic routing.
App is kept leightweight on purpose, to makeit as responsive as possible 
without any bloat. Currently only logging climbs is implemented, and 
features like account authentification or sessions are not currently implemented.

BUT:

More to come!



## Tech Stack

Front end:
- Static HTML/CSS
- EJS

Back end:
- Node
- Express

Database:
- PostgreSQL
- SQL

Hosting / Deployment:
- Render (both PostgreSQL and front end)
- secrets are in environment variables(nothing in git)

## Features

### Core

- Log a climb (name, graade)
- Delete your climbs
- Edit your climbs

### Usage of CRUD
- List: `GET /climbs`
- New: `GET /climbs/new` and `POST /climbs`
- Edit: `GEt /climbs/:id/edit` and `PUT /climbs/:id`
-Delete: `DELETE /climbs/:id`



## API

Quick overview of the routes used in this project:

- `GET /api/climbs` -> get all logged climbs
- `GET /api/climbs/:id` -> get one climb by id (dynamic route)
- `POST /api/climbs` -> add a new climb (`name`, `grade`)

The Home page (`client/js/home.js`) uses these routes with `fetch()` to load climbs and add new ones.

## Run Locally
Open terminal and then in terminal type `cd server`.

Then we have to install node modules using `npm install` 
to be able to use server before running it.
Afterwards, we have to set up env variables in .env(which you have to make using .env.example),
and .env should never be commited(it is in .gitignore). Where you have to set your DATABASE_URL,
to be able to use database.
Finally, use npm run dev to make server run on localhost


