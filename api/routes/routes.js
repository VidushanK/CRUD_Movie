const router = require('express').Router()
const knexConfig = require("../../knexfile.js")
const knex = require("knex")(knexConfig);

// Output all movies
router.get('/api/movie/all', (req, res) => {
	knex.select('title', 'description', 'year').from('movie').then((movie) => res.json(movie))
})

module.exports = router;
