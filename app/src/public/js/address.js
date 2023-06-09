document.addEventListener("DOMContentLoaded", function () {
	const autocompleteInput = new autocomplete.GeocoderAutocomplete(
		document.getElementById("address"),
		"ab3620499ea04790b883cd4a9f0a1a04",
		{
			/* Geocoder options */
		}
	);

	autocompleteInput.on("select", (location) => {
		document.getElementById("hidden-address").value =
			location.properties.formatted;

		document.getElementById("hidden-coordinates").value = JSON.stringify({
			lat: location.properties.lat,
			lon: location.properties.lon,
		});
	});

	autocompleteInput.on("suggestions", (suggestions) => {
		// process suggestions here
	});
});
