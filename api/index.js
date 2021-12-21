const express = require('express');
const bodyParser = require("body-parser");
const knexConfig = require("../knexfile.js")
const knex = require("knex")(knexConfig);
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development'
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('build'));

app.get('/', (req,res) => {
	res.send('hello world!')
})
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
})

