
exports.up = function (knex) {
	return knex.schema.createTable('movie', (table) => {
		table.increments();
		table.string("title");
		table.string('description');
		table.string('year');
		table.string('duration');
		table.integer('rating');
		table.integer('like');
		table.integer('dislike');
	})

};

exports.down = function (knex) {
	return knex.schema.dropTable('movie')
};

