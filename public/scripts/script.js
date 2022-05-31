mapboxgl.accessToken =
	'pk.eyJ1Ijoic2FtY2xhcmtiIiwiYSI6ImNsM3NsMTIwNzAwdWUzYnBjenFwZG1wbjkifQ.fFO4fbulANPhBtywbyszzA'

const succesLocation = position => {
	console.log(position)
	setupMap([position.coords.longitude, position.coords.latitude])
}

const errorLocation = () => {
	// setupMap([-2.24, 53.48])
}

navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
	enableHighAccuracy: true,
})

const setupMap = center => {
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/samclarkb/cl3tx4jtp003x14ny7qk1yfs3',
		center: center,
		zoomn: 16,
	})
}
