// import { Component, OnInit, Input } from '@angular/core';
// import * as L from 'leaflet';

// @Component({
//   selector: 'app-map',
//   template: `
//     <div id="map"></div>
//   `
// })
// export class MapNComponent implements OnInit {
//   @Input()layers: any[] = [];

//   map!: L.Map;

//   ngOnInit() {
//     this.map = L.map('map').setView([51.505, -0.09], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(this.map);

//     const layerControl = L.control.layers({}, {}, { position: 'topright' });

//     this.layers.forEach(layer => {
//       layerControl.addBaseLayer(layer.layer, layer.name);
//     });

//     layerControl.addTo(this.map);
//   }
// }
