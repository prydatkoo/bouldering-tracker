# Bouldering session logger.

## Table of contents

- [About](#about)
- [Possible names](#possible-names)
- [Features](#features)
- [API](#api)
- [TODO](#todo)

## About

Bouldering session logger, which allows users to log their climbing
sessions, track their progress, and share their achievements with friends.
The application will have a user-friendly interface and will be built
using modern web technologies. Users will be able to create an account,
log their climbs, and view their climbing history. The application will
also include features such as a climbing route database, a social feed for
sharing achievements, and a progress tracker to help climbers set and
achieve their goals.

## Possible names:

- SLAB
- Dyno

## Features

### Core

- Create an account and log in (basic auth flow for class project)
- Log a session (date, gym, duration, notes)
- Add climbs to a session (grade, attempts, send/flash, tags)
- View session history and climb details
- Progress overview (e.g., sends per grade, attempts trend)

### Nice-to-have / optional

- Route/problem database (add/search/filter problems)
- Social feed (post a session highlight, like/comment)
- Export/import data (JSON)

### AI Basics (optional ideas)

- Session summary generator (“What improved this week?”) from your notes
- Suggestion engine for next goals (based on recent sends/attempts)
- Auto-tagging notes (e.g., “slopers”, “overhang”, “footwork”)

## API

Quick overview of the routes used in this project:

- `GET /api/climbs` -> get all logged climbs
- `GET /api/climbs/:id` -> get one climb by id (dynamic route)
- `POST /api/climbs` -> add a new climb (`name`, `grade`)

The Home page (`client/js/home.js`) uses these routes with `fetch()` to load climbs and add new ones.

## TODO

### Track management (next steps)

- [ ] Add `DELETE /api/climbs/:id` route in `server/routes/climbs.routes.js`
- [ ] Add `PUT /api/climbs/:id` route in `server/routes/climbs.routes.js` (edit name/grade)
- [ ] Add "Delete" button next to each climb item in `client/js/home.js`
- [ ] Add "Edit" button next to each climb item in `client/js/home.js`
- [ ] On delete: call `fetch(..., { method: "DELETE" })` and reload list
- [ ] On edit: prefill form, submit with `fetch(..., { method: "PUT" })`, then reload list
- [ ] Sign in middleware

### UX polish

- [ ] Add confirmation dialog before delete
- [ ] Show success/error message after edit/delete action
- [ ] Disable submit button while request is in progress
