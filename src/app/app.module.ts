import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    CardCountryComponent,
    FiltroComponent,
    Vista1Component,
    Vista2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
