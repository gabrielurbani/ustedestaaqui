/*let myMap;
let canvas;
const MAPPA = new Mappa('Leaflet');
const COORDENADAS = {
    lat: -34.599722,
    lng: -58.381944,
    zoom: 11.5,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
    canvas = createCanvas(800, 640);
    myMap = MAPPA.tileMap(COORDENADAS);
    myMap.overlay(canvas);

}

function draw() {

}*/"use strict";
window.addEventListener('load', inicio, false);

let gyroscope = new Gyroscope({frequency: 60});

gyroscope.addEventListener('reading', e => {
   document.getElementById('gyro').innerHTML=
     'Gyroscope axis X:'+ gyroscope.x+
     'Gyroscope axis y:'+ gyroscope.y+
     'Gyroscope axis z:'+ gyroscope.z+
  console.log("Angular velocity along the X-axis " + gyroscope.x);
  console.log("Angular velocity along the Y-axis " + gyroscope.y);
  console.log("Angular velocity along the Z-axis " + gyroscope.z);
})
gyroscope.start();

function inicio() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(mostrarCoordenada);
    } else {
      alert('El navegador no dispone la capacidad de geolocalización');
    }
};

function mostrarCoordenada(posicion) {
    document.getElementById('dato').innerHTML=
      'Latitud:'+posicion.coords.latitude+
       '<br> Longitud:'+posicion.coords.longitude+
       '<br>Exactitud:'+posicion.coords.accuracy+
       '<br>Norte verdadero:'+posicion.coords.heading;      
};


var map = L.map('mapid').setView([-34.603259,-58.395201], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.603259,-58.395201]).addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();
