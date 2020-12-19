import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search.component';
import { DateInputsModule, DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { FlightSearchRoutingModule } from './flight-search.routing.module';
import { LanguageTranslateModule } from '../language-translate/language-translate.module';
import { NgBusyModule } from 'ng-busy';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslateModule,
    DatePickerModule,
    FormsModule,
    GridModule,
    DateInputsModule,
    FlightSearchRoutingModule,
    NgBusyModule
  ],
  declarations: [
      FlightSearchComponent
  ],
  providers: [
  ]
})

export class FlightSearchModule { }
