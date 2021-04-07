import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { MatCardModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CountrySummaryComponent } from './pages/main/country-summary/country-summary.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CountryDetailsComponent,
    CountrySummaryComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
