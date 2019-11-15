let map = L.map('flmap').setView([26.966823, -80.904514 ], 6.38);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck2warkk50p4g1cmue4yz78s4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2syd2hvbnpvMGZrcDNjbzJqYzMxdDBleCJ9.YEq7QYZjGWEqNY8jEbGQFQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

let bayfront = L.marker([25.776256, -80.186097]).addTo(map);
let sunshinegrove = L.marker([27.360205, -80.732263]).addTo(map);
let tinker = L.marker([28.539010, -81.404616]).addTo(map);
let seabreeze = L.marker([26.147006, -80.101336]).addTo(map);

bayfront.bindPopup("Ultra Music Festival");
sunshinegrove.bindPopup("Okeechobee Music & Arts Festival");
tinker.bindPopup("Electric Daisy Carnival (Orlando)");
seabreeze.bindPopup("Tortuga Music Festival");
