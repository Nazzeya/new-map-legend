import { Pipe, PipeTransform } from '@angular/core';
import { TranslatedLayersNamesMap, layersNamesMap } from '../map/map/map.component';

@Pipe({
  name: 'layers'
})

export class LayersPipe implements PipeTransform {

  transform(value: layersNamesMap, ...args: any): layersNamesMap {
    
    for(let i = 0; i < Object.keys(value['baseLayers']).length; i++){
      Object.keys(value['baseLayers'])[i] = Object.keys(value['baseLayers'])[i]+ 'qwerty'
    }
  
    // const overlays: TranslatedLayersNamesMap = value['overlays']
    
    return value;
  }

}


// function someMethod(layer: TranslatedLayersNamesMap) {
//   for(let i = 0; i < )
// }

