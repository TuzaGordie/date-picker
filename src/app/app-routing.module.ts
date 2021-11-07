import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ElectricityTarrifComponent } from './electricity-tarrif/electricity-tarrif.component';

const routes: Routes = [
  {path: 'lorem', component: ElectricityTarrifComponent},
  {path: '', component: DatePickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
