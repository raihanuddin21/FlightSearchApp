import { Component, OnInit } from '@angular/core';
import { Flight } from '../_models/flight';
import { AlertifyService } from '../_services/alertify.service';
import { FlightService } from '../_services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  public departureAirportCode: string;
  public arrivalAirportCode: string;
  public departureDate: Date;
  public returnDate: Date;

  flights: Flight[];

  constructor(private flightService: FlightService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  search() {
    this.departureAirportCode = (this.departureAirportCode === undefined || this.departureAirportCode === null || this.departureAirportCode == '') ? null : this.departureAirportCode;
    this.arrivalAirportCode = (this.arrivalAirportCode === undefined || this.arrivalAirportCode === null || this.arrivalAirportCode == '') ? null : this.arrivalAirportCode;    
    this.flightService.getFlights(this.departureAirportCode, this.arrivalAirportCode, this.departureDate, this.returnDate)
      .subscribe(
        (x) => { this.flights = x; },
        (x) => { this.alertify.error('Problem retrieving data'); },
        () => { });
  }
}
