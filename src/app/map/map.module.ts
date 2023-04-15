import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapRoutingModule } from './map-routing.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { LayersPipe } from '../pipes/layers.pipe';
import { NewMapComponent } from './new-map/new-map.component';

@NgModule({
    imports:      
    [ FormsModule, MapRoutingModule, CommonModule, LeafletModule ],
    declarations: [ MapComponent, LayersPipe, NewMapComponent],
    // exports: [ MapComponent]

})
export class MapModule { }