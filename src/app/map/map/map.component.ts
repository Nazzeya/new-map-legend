import { Component, ViewChild, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `
    <div class="map-container" #map></div>
    <div class="legend-container" #legend></div>
  `,
  styles: [
    `
      .map-container {
        height: 500px;
      }

      .legend-container {
        margin-top: 20px;
      }
    `
  ]
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map', { static: false }) mapContainer: any;
  @ViewChild('legend', { static: false }) legendContainer: any;

  ngAfterViewInit(): void {
    const map = L.map(this.mapContainer.nativeElement).setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const legend = new L.Control({ position: 'bottomleft' });
    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML = '<p>This is the legend</p>';
      return div;
    };
    legend.addTo(map);
  }
}