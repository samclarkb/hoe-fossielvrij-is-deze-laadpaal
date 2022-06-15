require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http') // require HTTP so we can make connection with a server
const server = http.createServer(app) // create an HTTP server
const fetch = require('node-fetch')
const InfluxDatabase = require('@influxdata/influxdb-client')
const InfluxDB = InfluxDatabase.InfluxDB
const INFLUXDB_URL = 'https://gc-acc.antst.net'
const INFLUXDB_ORG = 'grca'
const INFLUXDB_KEY = process.env.INFLUXDB_KEY
const client = new InfluxDB({
	url: INFLUXDB_URL,
	token: INFLUXDB_KEY,
})
const queryApi = client.getQueryApi(INFLUXDB_ORG)

app.set('view engine', 'ejs') // Set the view engine to EJS

app.use(express.static(__dirname + '/public'))
app.use(express.json()) // Makes it possible to parse JSON

app.get('/', async (req, res) => {
	res.render('home')
})

app.post('/', async (req, res) => {
	let lat = req.body.lat
	let long = req.body.long

	try {
		const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${long - 0.02}/${
			long + 0.02
		}/${lat - 0.02}/${lat + 0.02}/15`

		const response = await fetch(url)
		const data = await response.json()
		let SUSTAINDATA = []

		const energySuppliers = await getData()
		// console.log(energySuppliers)
		Object.entries(energySuppliers).map(supplier => {
			dataObject = {
				name: supplier[1][0],
				sustain: supplier[1][1]._value,
			}
			SUSTAINDATA.push(dataObject)
		})
		console.log(SUSTAINDATA)

		data.map(data => {
			let operatorName = data.operatorName
			if (operatorName == 'PitPoint') {
				data['provider'] = 'TotalGasPower'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Allego') {
				data['provider'] = 'Vattenfall'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Allego - Groningen and Drenthe') {
				data['provider'] = 'Vattenfall'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Community by Shell Recharge') {
				data['provider'] = 'EnergieDirect'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Blue Current') {
				data['provider'] = 'EnergieDirect'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'EV-Box') {
				data['provider'] = 'Engie'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Alfen') {
				data['provider'] = 'Vandebron'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'E-Flux') {
				data['provider'] = 'BudgetEnergie'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'LastMileSolutions') {
				data['provider'] = 'Engie'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Fastned') {
				data['provider'] = 'GreenChoice'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'BlueMarble Charging') {
				data['provider'] = 'Sepa'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Shell Regarge') {
				data['provider'] = 'EnergieDirect'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Eneco') {
				data['provider'] = 'Eneco'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else if (operatorName == 'Vattenfall') {
				data['provider'] = 'Vattenfall'
				SUSTAINDATA.find(SUSTAINDATA => {
					if (SUSTAINDATA.name == data.provider) {
						data.sustain = SUSTAINDATA.sustain
					}
				})
			} else {
				if (operatorName !== SUSTAINDATA.name) {
					data['provider'] = 'Unknown'
				}
			}
			return data
		})

		res.json(data)
		// console.log(data)
	} catch (error) {
		console.log(error)
	}
})

// code example by Jasper (De Voorhoede)
const groupBy = (items, prop) => {
	return items.reduce((out, item) => {
		const value = item[prop]
		if (prop == 'operatorName') {
			out[value] = out[value] || []
			out[value].push(item)
		} else {
			out[value] = item
		}
		return out
	}, {})
}

async function getData() {
	const query = `
    from(bucket: "providers")
      |> range(start: -28h, stop: -24h)
      |> filter(fn: (r) => r["_measurement"] == "past_providers")
    `
	try {
		const rows = await queryApi.collectRows(query)
		const data = Object.entries(groupBy(rows, '_field'))
		// console.log(data)
		return data
	} catch (error) {
		console.error(error)
		return []
	}
}

// tell the server to listen on port 7000
server.listen(process.env.PORT, () => {
	console.log(`listening on *:${process.env.PORT}`)
})
