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

const close = document.getElementById('close')
const open = document.getElementById('open')
const popup = document.getElementById('popup-container')

open.addEventListener('click', () => {
	popup.classList.add('show')
})

close.addEventListener('click', () => {
	popup.classList.remove('show')
})
