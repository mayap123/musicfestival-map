let map = L.map('usmap').setView([37.681425, -93.445818 ], 3.45);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck2wmdbjz1slq1cml2lztsydg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);


for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places [i].longitude ])
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
    places[i].descrip + '</p')
    .addTo ( map );
}
