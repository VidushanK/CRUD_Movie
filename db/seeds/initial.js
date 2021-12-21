
exports.seed = knex => knex('movie').del()
  .then(() => {
    return knex('movie').insert([
      {
        title: 'Test Movie',
        description: 'Description goes here',
        year: '2021',
        duration: '1 hour',
        rating: 0,
        like: 0,
        dislike: 0
      },
      {
        title: 'Test Movie2',
        description: 'Description goes here2',
        year: '2021',
        duration: '2 hour',
        rating: 0,
        like: 0,
        dislike: 0
      },
      {
        title: 'TestMovie',
        description: 'Description goes here3',
        year: '2021',
        duration: '3 hour',
        rating: 0,
        like: 0,
        dislike: 0
      }
    ])
  })
