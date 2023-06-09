document.addEventListener("DOMContentLoaded", function () {
	navigator.geolocation.getCurrentPosition(function (location) {
		let latlng = new L.LatLng(
			location.coords.latitude,
			location.coords.longitude
		);

		let mymap = L.map("mapid").setView(latlng, 13);

		L.tileLayer(
			"https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?&apiKey=ab3620499ea04790b883cd4a9f0a1a04",
			{
				maxZoom: 19,
				attribution:
					'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
			}
		).addTo(mymap);

		L.marker(latlng, {
			icon: L.icon({
				iconUrl:
					"https://api.geoapify.com/v1/icon/?type=awesome&color=%23ff4444&size=small&icon=group&iconType=material&iconSize=small&text=you&textSize=small&scaleFactor=2&apiKey=ab3620499ea04790b883cd4a9f0a1a04",
			}),
		}).addTo(mymap);

		let eventList = Array.from(document.querySelectorAll(".event"));

		eventList.forEach((item, index) => {
			let event = JSON.parse(item.getAttribute("value"));
			let coordinates = JSON.parse(event.coordinates);
			let latlng = new L.LatLng(coordinates.lat, coordinates.lon);

			L.marker(latlng, {
				icon: L.icon({
					iconUrl:
						"https://api.geoapify.com/v1/icon/?type=awesome&color=%237346f1&size=small&icon=group&iconType=material&iconSize=small&textSize=small&scaleFactor=2&apiKey=ab3620499ea04790b883cd4a9f0a1a04",
				}),
			}).addTo(mymap);
		});
	});
});
