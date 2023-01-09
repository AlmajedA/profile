// import {User, Listing, Transaction} from './models.js';
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000



const app = express()
app.set('view engine', 'pug')

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(express.static(__dirname + '/public'));

app.get('/', async function (req, res) {
	res.render('profile', { title: 'Profile'})
})
app.get('/profile', async function (req, res) {
	res.render('profile', { title: 'Profile'})
})

app.get('/projects', async function (req, res) {
	res.render('projects', { title: 'Projects'})
})

app.get('/experience', async function (req, res) {
	res.render('experience', { title: 'experience'})
})



app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
