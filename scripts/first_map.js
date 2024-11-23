let map = L.map('map').setView([29.624361, -82.341427], 11.44);

L.tileLayer('https://api.mapbox.com/styles/v1/adam-goodson/cm3rtfx62001p01ql0azu26ch/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWRhbS1nb29kc29uIiwiYSI6ImNtM3JvNXl1ZjAwNmoyam4zNTI3cGsycHMifQ.vULg9_oNOFSXWf9G-cqrTQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

let marker1 = L.marker([29.57070815175166, -82.30067840373351]).addTo(map).bindPopup("Paines Prairie").openPopup();
let marker2 = L.marker([29.61984222404331, -82.32965667489553]).addTo(map).bindPopup("Sweetwater Wetlands Park");
let marker3 = L.marker([29.643814493682957, -82.36244700373119]).addTo(map).bindPopup("Lake Alice");
let marker4 = L.marker([29.6454959242707, -82.3214869069979]).addTo(map).bindPopup("Depot Park");