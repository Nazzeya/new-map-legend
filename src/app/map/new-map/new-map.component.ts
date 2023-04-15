import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Map, Control, DomUtil, ZoomAnimEvent , Layer, MapOptions, tileLayer, latLng, ZoomAnimEventHandlerFn, LeafletKeyboardEvent, LeafletEventHandlerFnMap, circle, polygon } from 'leaflet';
import * as L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-new-map',
  templateUrl: './new-map.component.html',
  styleUrls: ['./new-map.component.scss']
})

export class NewMapComponent implements OnInit {

  private map!: L.Map;

  startMap(){
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

  }

  layersControl(){

    const baseLayerOne = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    });

    const layer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap'
  });

    const baseLayerTwo = tileLayer('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })

    baseLayerOne.addTo(this.map);
    baseLayerTwo.addTo(this.map)

    const overlayLayer = L.marker([51.5, -0.09]).addTo(this.map);
    const overlayLayer2 = circle([53.205, 63.6246 ], { radius: 5000 });

    const baseLayers = {
      'OpenStreetMap': baseLayerOne,
      'Open Cycle Map': baseLayerTwo,
      layer1
    };

    const overlayLayers = {
      'Markers': overlayLayer,
       'circle': overlayLayer2
    };

    L.control.layers(baseLayers, overlayLayers).addTo(this.map);
  }

  addLegend(){
    const legend = new L.Control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML += '<h4>Legend</h4>';
      div.innerHTML += '<input type="checkbox" style="background: green"></input><span>Green</span><br>';
      div.innerHTML += '<input type="checkbox" style="background: blue"></input><span>Blue</span><br>';
      div.innerHTML += '<input type="checkbox" style="background: red"></input><span>Red</span><br>';
      return div;
    };

    legend.addTo(this.map);
  }

  layerLegend(){

  }

  generateLegend(layers: any) {
  const legend = new L.Control({ position: 'bottomright' });
  
  legend.onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
      <h4>Legend</h4>
      ${layers.map((layer: { key: any; name: any; }) => {
        return `<div class="legend-item">
                  <span class="legend-key" style="background-color: ${layer.key}"></span>
                  <span class="legend-name">${layer.name}</span>
                </div>`;
      }).join('')}
    `;
    
      return div;
    };

    return legend;
  }

  ngOnInit() {
    // this.startMap()
    // this.layersControl()
    // this.addLegend()

    const layers = [
      {
        name: 'Layer 1',
        layer: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
        active: true
      },
      {
        name: 'Layer 2',
        layer: circle([53.205, 63.6246 ], { radius: 5000 }),
        active: false
      }
    ];

    this.map = L.map('map', {
      center: [53.205, 63.6246],
      zoom: 11
    });

    layers.forEach(layer => {
      if (layer.active) {
        layer.layer.addTo(this.map);
      }
    });

    const control = new L.Control({ position: 'bottomright' });

    control.onAdd = () => {
      const div = L.DomUtil.create('div', 'legend');

      layers.forEach(layer => {
        const input = L.DomUtil.create('input', 'layer-control-input', div);
        input.type = 'checkbox';
        input.checked = layer.active;

        const label = L.DomUtil.create('label', 'layer-control-label', div);
        label.innerHTML = layer.name;

        const line = L.DomUtil.create('br', 'layer-control-br', div);
        line.innerHTML = layer.name


        input.addEventListener('change', () => {
          if (input.checked) {
            layer.layer.addTo(this.map);
          } else {
            layer.layer.removeFrom(this.map);
          }

          layer.active = input.checked;
        });
      });

  return div;
};

control.addTo(this.map);
  }

    // this.createLegend();
    

    // L.control({ position: "bottomleft" }).onAdd = function(map) {
    // var div = L.DomUtil.create("div", "legend");
    // div.innerHTML += "<h4>Tegnforklaring</h4>";
    // div.innerHTML += '<i style="background: #477AC2"></i><span>Water</span><br>';
    // div.innerHTML += '<i style="background: #448D40"></i><span>Forest</span><br>';
    // div.innerHTML += '<i style="background: #E6E696"></i><span>Land</span><br>';
    // div.innerHTML += '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
    // div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
    // div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>'; 
    //   return div;
    // }.addTo(map);

}
