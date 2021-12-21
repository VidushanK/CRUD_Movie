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

// Create movies
router.post('/api/movie', (req, res) => {
	const newMovie = {
		title: req.body.title,
		description: req.body.description,
		year: req.body.year,
		duration: req.body.duration,
		rating: 0,
		like: 0,
		dislike: 0
	}

	return knex.insert(newMovie).into('movie').then(() => {
		res.json({
			success: true,
			message: 'Movie Added!'
		})
	});
})

// Delete movie
router.delete('/api/movie/:id', (req, res) => {
	knex.del()
	.from('movie')
	.where({ title: req.params.id })
	.then((movie) => res.status(200)
	.jsonp({ status: 200, message: 'Movie successfully deleted!' }))
	.catch((err) => res.status(500).jsonp({ status: 500, message: err.message }))
})
module.exports = router;
