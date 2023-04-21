import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MainComponent } from './map-legend/main/main.component';
import { NewMapComponent } from './new-map/new-map.component';
// import { MainComponent } from './new-version/main/main.component';
// import { MapNComponent } from './new-version/map/map.component';
// import { NewComponent } from './main/new.component';

const routes: Routes = [
    {
        path: '', component: MainComponent
        // path: '', component: MainComponent
        // path: '', component: NewMapComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }