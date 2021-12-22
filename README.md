# CRUD Movie API

This API is intended to manage, search and like/dislike movies.


## Create: 
**Create** A new Movie by sending a POST request below to `/api/movie`

**Request:**
```json
POST /api/movie 
Accept: application/json
Content-Type: application/json

{
	"title":MoveTitle,
	"description":DESC,
	"year":2021,
	"duration":1 Hour,
	"rating":0,
	"like": 0,
	"dislike": 0
}
```

## READ: 
**Search** for a movie by sending a GET request to `/api/movie/:id` , replace `:id` with the title of the movie.

**Request:**
```json
GET /api/movie 
Accept: application/json
Content-Type: application/json

{
	"title":MovieTitle,
}
```

## Update: 
**Update** A existing Movie by sending a PUT request below to `/api/movie/:id`

**Request:**
```json
PUT /api/movie/:id 
Accept: application/json
Content-Type: application/json

{
	"title":MoveTitle,
	"description":DESC,
	"year":2021,
	"duration":1 Hour,
}
```

## DELETE: 
**Delete** A existing Movie by sending a DELETE request below to `/api/movie/:id`

**Request:**
```json
DELETE /api/movie/:id 
Accept: application/json
Content-Type: application/json

{
	"title":MovieTitle,
}
```

## Like OR Dislike: 
**Like OR Dislike** Like or Dislike a existing Movie by sending a PUT request below to either `/api/movie/like/:id` or `/api/movie/dislike/:id`

**Request:**
```json
PUT /api/movie/like/:id || PUT /api/movie/dislike/:id
Accept: application/json
Content-Type: application/json

{
	"title":MovieTitle,
}
```

## Installation:

### 1. Clone repo
### 2. Create env file
### 2. To install dependencies and start the server, open terminal and type:

```
npm install
npm run db:migrate
npm run db:seed
npm start
open http://localhost:3000 in your browser
```

## Dependencies

- ExpressJS
- KnexJS
