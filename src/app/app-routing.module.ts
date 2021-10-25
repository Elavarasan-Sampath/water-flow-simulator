import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigGridCreationComponent } from '../app/config-grid-creation/config-grid-creation.component';
import { SimulateWaterflowComponent } from '../app/simulate-waterflow/simulate-waterflow.component';

const routes: Routes = [
  { path : '', component: ConfigGridCreationComponent },
  { path : 'simulation', component: SimulateWaterflowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
