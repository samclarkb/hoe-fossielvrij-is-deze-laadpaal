mapboxgl.accessToken =
	'pk.eyJ1Ijoic2FtY2xhcmtiIiwiYSI6ImNsM3NsMTIwNzAwdWUzYnBjenFwZG1wbjkifQ.fFO4fbulANPhBtywbyszzA'

const succesLocation = position => {
	let lat = position.coords.latitude
	let lon = position.coords.longitude

	setupMap([lat, lon])
	console.log(['lat ' + lat, 'lon ' + lon])

	const data = { lat, lon }

	const options = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(data),
	}
	fetch('/', options)
}

const errorLocation = () => {
	// setupMap([-20.24, 53.48])
}

navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
	enableHighAccuracy: true,
})

const setupMap = () => {
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/samclarkb/cl3tx4jtp003x14ny7qk1yfs3',
		center: [4.899431, 52.379189],
		zoom: 14,
		attributionControl: false,
		followUserLocation: true,
	})

	// Add geolocate control to the map.
	map.addControl(
		new mapboxgl.GeolocateControl({
			positionoptions: {
				enableHighAccuracy: true,
			},
			// When active the map will receive updates to the device's location as it changes.
			trackUserLocation: true,
			// Draw an arrow next to the location dot to indicate which direction the device is heading.
			showUserHeading: true,
		}),
		'bottom-right'
	)
}

fetch('/', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(data),
})
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.forEach(data => {
			let dataForMap = {
				type: data.markerType,
				geometry: {
					type: 'Laadpunt',
					coordinates: [data.coordinates.longitude, data.coordinates.latitude],
				},
				properties: {
					title: 'Laadpunt',
					description:
						'Provider: ' +
						data.operatorName +
						'\nBeschikbaarheid: ' +
						data.status +
						'\nGram CO2 uitstoot per kWh: ' +
						data.sustain,
					operator: data.operatorName,
					sustainability: 'Gram CO2 uitstoot met kWh: ' + data.sustain,
				},
			}
			geojson.features.push(dataForMap)
		})
		console.log(geojson, 'geojson')

		// add markers to map
		geojson.features.forEach(element => {
			loading.style.display = 'none' // delete loading icon
			// create a HTML element for each feature
			const el = document.createElement('div')
			el.className = 'marker'

			// make a marker for each feature and add to the map
			new mapboxgl.Marker(el)
				.setLngLat(element.geometry.coordinates)
				.setPopup(
					new mapboxgl.Popup({
						offset: 25,
					}) // add popups
						.setHTML(
							`<h3>${element.properties.title}</h3><p>${element.properties.description}</p>`
						)
				)
				.addTo(map)
		})
	})

const close = document.getElementById('close')
const open = document.getElementById('open')
const popup = document.getElementById('popup-container')

open.addEventListener('click', () => {
	popup.classList.add('show')
})

close.addEventListener('click', () => {
	popup.classList.remove('show')
})
