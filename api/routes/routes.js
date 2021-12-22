const router = require('express').Router()
const knexConfig = require("../../knexfile.js")
const knex = require("knex")(knexConfig);
const { calculateRatings } = require('../helpers/rating')

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

// Update movie
router.put('/api/movie/:id', (req, res) => {
	const updateMovie = {
		title: req.body.title,
		description: req.body.description,
		year: req.body.year,
		duration: req.body.duration,
	}
	knex('movie')
	.where({ title: req.params.id })
	.update(updateMovie)
	.then(() => res.status(200).jsonp({ status: 200, message: 'Movie updated!' }))
})

// Like movie
router.put('/api/movie/like/:id', (req, res) => {
	knex('movie')
		.where({ title: req.params.id })
		.increment('like', 1)
		.then(async () => {
			const like = await knex.select('like').from('movie').where({ title: req.params.id }).then((like) => { return like[0]['like'] })
			const dislike = await knex.select('dislike').from('movie').where({ title: req.params.id }).then((dislike) => { return dislike[0]['dislike'] })
			console.log(like, dislike)
			calculateRatings(like, dislike, req.params.id)
		})
		.then(res.status(200).jsonp({ status: 200, message: 'Successfully liked movie' }))

})

// Dislike movie
router.put('/api/movie/dislike/:id', (req, res) => {
	knex('movie')
		.select()
		.where({ title: req.params.id })
		.increment('dislike', 1)
		.then(async () => {
			const like = await knex.select('like').from('movie').where({ title: req.params.id }).then((like) => { return like[0]['like'] })
			const dislike = await knex.select('dislike').from('movie').where({ title: req.params.id }).then((dislike) => { return dislike[0]['dislike'] })
			console.log(like, dislike)
			calculateRatings(like, dislike, req.params.id)
		})
		.then(res.status(200).jsonp({ status: 200, message: 'Successfully disliked movie' }))
})

module.exports = router;
