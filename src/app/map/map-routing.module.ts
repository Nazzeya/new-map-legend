import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NewMapComponent } from './new-map/new-map.component';
// import { NewComponent } from './main/new.component';

const routes: Routes = [
    {
        // path: '', component: MapComponent
        path: '', component: NewMapComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }