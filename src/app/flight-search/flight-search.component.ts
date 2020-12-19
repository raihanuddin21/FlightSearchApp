import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Flight } from '../_models/flight';
import { AlertifyService } from '../_services/alertify.service';
import { CurrentLanguageService } from '../_services/current-language.service';
import { FlightService } from '../_services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  public busy: Subscription;
  subscriptions: Subscription[] = [];

  public departureAirportCode: string;
  public arrivalAirportCode: string;
  public departureDate:Date = new Date();
  public returnDate: Date = new Date();

  flights: Flight[];

  constructor(private flightService: FlightService,
    private translateService: TranslateService,
    private currentLanguageService: CurrentLanguageService,
    private alertify: AlertifyService,
    public formBuilder: FormBuilder) {
    this.createSearchForm();
  }

  ngOnInit() {
    this.changeLanguage();
  }

  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      departureAirportCode: ['', Validators.required],
      arrivalAirportCode: [this.arrivalAirportCode, Validators.required],
      departureDate: [this.departureDate, Validators.required],
      returnDate: [this.returnDate, Validators.required],
    });
  }

  search() {
    if(!this.searchForm.valid){
      this.searchForm.markAllAsTouched();
      return;
    }    

    this.departureAirportCode = (this.departureAirportCode === undefined || this.departureAirportCode === null || this.departureAirportCode == '') ? null : this.departureAirportCode;
    this.arrivalAirportCode = (this.arrivalAirportCode === undefined || this.arrivalAirportCode === null || this.arrivalAirportCode == '') ? null : this.arrivalAirportCode;
    this.subscriptions.push(this.busy = this.flightService.getFlights(this.departureAirportCode, this.arrivalAirportCode, this.departureDate, this.returnDate)
      .subscribe(
        (x) => { this.flights = x; },
        (x) => { this.alertify.error('Problem retrieving data'); },
        () => { }));
  }

  changeLanguage() {
    this.translateService.setDefaultLang(this.currentLanguageService.code);
    this.subscriptions.push(this.currentLanguageService.getLanguageChangeEmitter().subscribe(x => this.translateService.setDefaultLang(x)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
