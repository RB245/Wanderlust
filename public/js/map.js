
mapboxgl.accessToken = mapToken;

  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: "mapbox://styles/mapbox/streets-v12",
      center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom:9  // starting zoom
  });

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h5>${listing.title}</h5><p>Exact location will be provided after booking</p>`))
    .addTo(map);

// if (Array.isArray(coordinates) && coordinates.length === 2) {
//     const marker = new mapboxgl.Marker()
//         .setLngLat(coordinates) // Ensure it's a valid [lng, lat] array
//         .addTo(map);
// } else {
//     console.error("Invalid coordinates:", coordinates);
// }