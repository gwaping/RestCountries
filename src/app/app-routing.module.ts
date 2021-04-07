import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [

  { path: '', component: MainComponent},
  { path: 'country-details', component: CountryDetailsComponent},
  { path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
