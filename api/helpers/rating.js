const knexConfig = require("../../knexfile.js")
const knex = require("knex")(knexConfig);

const calculateRatings = (like, dislike, movie) => {
	let updatedRating = (like / (like + dislike)) * 5;

	return knex('movie').where({ title: movie }).update({ rating: updatedRating }).then(console.log(`successfully calculated & updated DB! Rating is ${updatedRating} out of 5 `))
}

module.exports = {calculateRatings}
