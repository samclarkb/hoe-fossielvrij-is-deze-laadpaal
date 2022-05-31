mapboxgl.accessToken =
	'pk.eyJ1Ijoic2FtY2xhcmtiIiwiYSI6ImNsM3NsMTIwNzAwdWUzYnBjenFwZG1wbjkifQ.fFO4fbulANPhBtywbyszzA'

const succesLocation = position => {
	setupMap([position.coords.longitude, position.coords.latitude])
}

const errorLocation = () => {
	setupMap([-2.24, 53.48])
}

navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
	enableHighAccuracy: true,
})

const setupMap = center => {
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/samclarkb/cl3tx4jtp003x14ny7qk1yfs3',
		center: center,
		zoom: 12,
	})

	// Add geolocate control to the map.
	map.addControl(
		new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true,
			},
			// When active the map will receive updates to the device's location as it changes.
			trackUserLocation: true,
			// Draw an arrow next to the location dot to indicate which direction the device is heading.
			showUserHeading: true,
		})
	)
}
