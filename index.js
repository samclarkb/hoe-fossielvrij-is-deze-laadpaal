require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http') // require HTTP so we can make connection with a server
const server = http.createServer(app) // create an HTTP server
const fetch = require('node-fetch')

app.set('view engine', 'ejs') // Set the view engine to EJS

app.use(express.static(__dirname + '/public'))
app.use(express.json()) // Makes it possible to parse JSON

app.get('/', async (req, res) => {
	res.render('home')
})

app.post('/', async (req, res) => {
	let lat = req.body.lat
	let lon = req.body.lon

	console.log(lat)
	console.log(lon)

	try {
		const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${lon - 0.02}/${
			lon + 0.02
		}/${lat - 0.02}/${lat + 0.02}/15'`

		const response = await fetch(url)
		const data = await response.json()

		res.json(data)
	} catch (error) {
		console.error(error)
		res.json({ error })
	}
})

// tell the server to listen on port 7000
server.listen(process.env.PORT, () => {
	console.log(`listening on *:${process.env.PORT}`)
})
