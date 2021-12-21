const router = require('express').Router()
const knexConfig = require("../../knexfile.js")
const knex = require("knex")(knexConfig);

// Output all movies
router.get('/api/movie/all', (req, res) => {
	knex.select('title', 'description', 'year')
	.from('movie')
	.then((movie) => res.json(movie))
})

// Output movies by name
router.get('/api/movie/:id', (req, res) => {
	knex.select()
	.from('movie')
	.where({ title: req.params.id })
	.then((movie) => res.json(movie))
	.catch((err) => res.status(500).jsonp({ status: 500, message: err.message }))
})

module.exports = router;
