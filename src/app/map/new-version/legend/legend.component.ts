// import { Component, Input } from '@angular/core';
// // import { MapNComponent } from '../map/map.component';
// import * as L from 'leaflet';

// @Component({
//   selector: 'app-legend',
//   template: `
//     <div class="legend">
//       <div *ngFor="let layer of layers">
//         <input type="checkbox" [checked]="map.hasLayer(layer.layer)" (change)="toggleLayer(layer)">
//         <span style="color: {{layer.color}}">{{layer.name}}</span>
//       </div>
//     </div>
//   `,
//   styles: [`
//     .legend {
//       position: absolute;
//       bottom: 10px;
//       left: 10px;
//       z-index: 1000;
//       background: white;
//       padding: 10px;
//       border-radius: 5px;
//       font-family: Arial, Helvetica, sans-serif;
//       font-size: 14px;
//       line-height: 1.5;
//     }
//   `]
// })
// export class LegendComponent {
//   @Input()
//   layers: any[] = [];
//   map: L.Map;

//   constructor(private mapComponent: MapNComponent) {
//     this.map = mapComponent.map;
//   }

//   toggleLayer(layer: any) {
//     if (this.map.hasLayer(layer.layer)) {
//       this.map.removeLayer(layer.layer);
//     } else {
//       this.map.addLayer(layer.layer);
//     }
//   }
// }
