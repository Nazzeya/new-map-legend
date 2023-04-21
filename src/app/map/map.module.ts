import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapRoutingModule } from './map-routing.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
// import { LayersPipe } from '../pipes/layers.pipe';
import { NewMapComponent } from './new-map/new-map.component';
import { LegendComponent } from './map-legend/legend/legend.component';
import { MainComponent } from './map-legend/main/main.component';
// import { LegendComponent } from './new-version/legend/legend.component';
// import { MainComponent } from './new-version/main/main.component';
// import { MapNComponent } from './new-version/map/map.component';

@NgModule({
    imports:      
    [ FormsModule, MapRoutingModule, CommonModule, LeafletModule ],
    // declarations: [ MapComponent, LayersPipe, NewMapComponent, LegendComponent, MainComponent, MapNComponent],
    declarations: [MapComponent, NewMapComponent, LegendComponent, MainComponent]
    // exports: [ MapComponent]

})
export class MapModule { }