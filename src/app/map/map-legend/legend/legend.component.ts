import { Component, ViewChild, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-legend',
  template: `
    <div class="legend-container" #legend></div>
  `,
  styles: [
    `
      .legend-container {
        margin-top: 20px;
      }
    `
  ]
})
export class LegendComponent implements AfterViewInit {
  @ViewChild('legend', { static: false }) legendContainer: any;

  ngAfterViewInit(): void {
    const legend = new L.Control({ position: 'bottomleft' });
    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML = '<p>This is the legend.</p>';
      return div;
    };
    legend.addTo(this.legendContainer.nativeElement);
  }
}
