import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricityTarrifComponent } from './electricity-tarrif/electricity-tarrif.component';

const routes: Routes = [
  {path: '', component: ElectricityTarrifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
