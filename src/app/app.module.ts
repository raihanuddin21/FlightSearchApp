import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslateModule } from './language-translate/language-translate.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FlightSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DatePickerModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    LanguageTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
