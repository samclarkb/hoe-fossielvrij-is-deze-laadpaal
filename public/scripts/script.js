mapboxgl.accessToken =
	'pk.eyJ1Ijoic2FtY2xhcmtiIiwiYSI6ImNsM3NsMTIwNzAwdWUzYnBjenFwZG1wbjkifQ.fFO4fbulANPhBtywbyszzA'

let data
const loading = document.querySelector('.loader')

const succesLocation = position => {
	let lat = position.coords.latitude
	let long = position.coords.longitude

	map.flyTo({
		center: [long, lat],
		speed: 1,
	})

	setupMap([lat, long])
	loading.style.display = 'none'

	data = { lat, long }

	const options = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(data),
	}
	fetch('/', options)
		.then(response => response.json())
		.then(data => {
			data.forEach(data => {
				let stationData = {
					type: data.markerType,
					geometry: {
						type: 'Laadpunt',
						coordinates: [data.coordinates.longitude, data.coordinates.latitude],
					},
					properties: {
						title: `<img src='./images/chargingLogo.png'> Station:`,
						provider: '<span> Provider: </span>' + data.operatorName,
						availability: '<span> Availabilty: </span>' + data.status,
						emission: '<span> Emission: </span>' + data.sustain,
					},
				}
				geojson.features.push(stationData)
			})

			// add markers to map
			geojson.features.forEach(element => {
				// create a HTML element for each feature

				let charger = document.createElement('div')
				if (data.length > 0) {
					if (
						data[0].status == 'Occupied' ||
						data[0].status == 'Unavailable' ||
						data[0].status == 'Unknown'
					) {
						charger.classList.add('occupied')
					} else if (data[0].status == 'Available') {
						charger.classList.add('marker')
					}
				}
				data.shift() // removes the first object out of an array

				// make a marker for each feature and add to the map
				const marker = new mapboxgl.Marker(charger, {
					scale: 0.9,
				})
					.setLngLat(element.geometry.coordinates)
					.setPopup(
						new mapboxgl.Popup({
							offset: 25,
						}) // add popups
							.setHTML(
								`<h3>${element.properties.title}</h3><p>${element.properties.provider}</p><p>${element.properties.availability}</p><p>${element.properties.emission}</p>`
							)
					)
					.addTo(map)
			})
		})
		.catch(error => {
			console.log(error)
		})

	let geojson = {
		type: 'ChargingStations',
		features: [],
	}
}

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/samclarkb/cl3tx4jtp003x14ny7qk1yfs3', // refers to my own custom made map
	center: [4.899431, 52.379189], // start point (Amsterdam)
	zoom: 15, // level of zoom
	attributionControl: false,
	followUserLocation: true,
})

// add search bar
let geocoder = new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	mapboxgl: mapboxgl,
	flyTo: {
		zoom: 15, // level of zoom
	},
	marker: {
		color: 'red',
	},
})
map.addControl(geocoder)

geocoder.on('result', event => {
	const long = event.result.center[0]
	const lat = event.result.center[1]

	map.flyTo({
		center: [long, lat],
		speed: 1,
	})

	const data = { long, lat }

	const options = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(data),
	}
	fetch('/', options)
		.then(response => response.json())
		.then(data => {
			data.forEach(data => {
				let stationData = {
					type: data.markerType,
					geometry: {
						type: 'Laadpunt',
						coordinates: [data.coordinates.longitude, data.coordinates.latitude],
					},
					properties: {
						title: `<img src='./images/chargingLogo.png'> Station:`,
						provider: '<span> Provider: </span>' + data.operatorName,
						availability: '<span> Availabilty: </span>' + data.status,
						emission: '<span> Emission: </span>' + data.sustain,
					},
				}
				geojson.features.push(stationData)
			})

			// add markers to map
			geojson.features.forEach(element => {
				// create a HTML element for each feature

				let charger = document.createElement('div')
				if (data.length > 0) {
					if (
						data[0].status == 'Occupied' ||
						data[0].status == 'Unavailable' ||
						data[0].status == 'Unknown'
					) {
						charger.classList.add('occupied')
					} else if (data[0].status == 'Available') {
						charger.classList.add('marker')
					}
				}
				data.shift() // removes the first object out of an array

				// make a marker for each feature and add to the map
				const marker = new mapboxgl.Marker(charger, {
					scale: 0.9,
				})
					.setLngLat(element.geometry.coordinates)
					.setPopup(
						new mapboxgl.Popup({
							offset: 25,
						}) // add popups
							.setHTML(
								`<h3>${element.properties.title}</h3><p>${element.properties.provider}</p><p>${element.properties.availability}</p><p>${element.properties.emission}</p>`
							)
					)
					.addTo(map)
			})
		})
		.catch(error => {
			console.log(error)
		})
	let geojson = {
		type: 'ChargingStations',
		features: [],
	}
})

const errorLocation = () => {
	data = { long: 4.911941, lat: 52.351961 } // default coords
}

navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
	enableHighAccuracy: true,
})

const setupMap = () => {
	map.addControl(
		new mapboxgl.GeolocateControl({
			positionoptions: {
				enableHighAccuracy: true,
			},
			trackUserLocation: true, // When active the map will receive updates to the device's location as it changes.
			showUserHeading: true, // Draw an arrow next to the location dot to indicate which direction the device is heading.
		}),
		'bottom-right'
	)
}

const close = document.getElementById('close')
const open = document.getElementById('open')
const popup = document.getElementById('popup-container')

open.addEventListener('click', () => {
	popup.classList.add('show')
})

close.addEventListener('click', () => {
	popup.classList.remove('show')
})
