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
	const data = 'hoi'
	res.render('home', { data })
})

app.post('/', async (req, res) => {
	// let lat = req.body.lat
	// let long = req.body.long

	let lat = 52.351961
	let long = 4.911941

	console.log(lat)
	console.log(long)

	try {
		const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${long - 0.02}/${
			long + 0.02
		}/${lat - 0.02}/${lat + 0.02}/15`

		const response = await fetch(url)

		console.log(response)
		const data = await response.json()

		console.log(data.length)

		// console.log(data)
		res.json(data)
	} catch (error) {
		console.log(error)
		res.json('kapot')
	}
	// res.render('home')
})

// tell the server to listen on port 7000
server.listen(process.env.PORT, () => {
	console.log(`listening on *:${process.env.PORT}`)
})
