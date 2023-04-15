import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Map, Control, DomUtil, ZoomAnimEvent , Layer, MapOptions, tileLayer, latLng, ZoomAnimEventHandlerFn, LeafletKeyboardEvent, LeafletEventHandlerFnMap, circle, polygon } from 'leaflet';
import * as L from 'leaflet';

export type TranslatedLayersNamesMap = {
  [name: string]: Layer;
};

export type layersNamesMap = {
  'baseLayers': TranslatedLayersNamesMap,
  'overlays': TranslatedLayersNamesMap
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  private map: any;
  private bounds: any = new L.LatLngBounds(L.latLng(53.1, 63.5),L.latLng(53.3,63.9))

  options = {
	  layers: [
		  tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 19, 
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
      })
	  ],
    minZoom: 11,
    scrollWheelZoom:false,
	  zoom: 11.5,
    maxBounds: this.bounds,
	  center: latLng(53.205, 63.6246)
  };

  overOne : string = '';

  translate(value: layersNamesMap){
    console.log('translate')
    for(let i = 0; i < Object.keys(value['overlays']).length; i++){
      Object.keys(value['overlays'])[i] = String(Object.keys(value['overlays'])[i])+'qwerty'
      console.log(Object.keys(value['overlays'])[i])
    }

    console.log(Object.keys(value['overlays']))
  
    // const overlays: TranslatedLayersNamesMap = value['overlays']
    
    return value;
  }
layersControl = {
	  baseLayers: {
		  'Open Street Map': tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
		  'Open Cycle Map': tileLayer('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	  },
	  overlays: {
		  'Big Circle': circle([53.205, 63.6246 ], { radius: 5000 }),
		  'Big Square': polygon([[ 53.205, 63.6246 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
	  }
  }
  
  

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}