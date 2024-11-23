let map = L.map('mapped').setView([28.200289, -83.083805], 6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/adam-goodson/cm3s80ecg002701ry917w8zwn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWRhbS1nb29kc29uIiwiYSI6ImNtM3JvNXl1ZjAwNmoyam4zNTI3cGsycHMifQ.vULg9_oNOFSXWf9G-cqrTQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

for (let i = 0; i < places.length; i++) {
    L.marker([places[i].latitude, places[i].longitude])
        .bindPopup('<h3>' + places[i].placename + '</h3>' + '<p>' + places[i].description + '</p>')
        .addTo(map);
}

for (let i = 0; i < places.length; i++) {
    console.log(places[i]);
}
