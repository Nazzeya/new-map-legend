import { Component, ViewChild, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `
    <div class="map-container" #map></div>
  `,
  styles: [
    `
      .map-container {
        height: 500px;
      }
    `
  ]
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) mapContainer: any;

  ngAfterViewInit(): void {
    const map = L.map(this.mapContainer.nativeElement).setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }
}
