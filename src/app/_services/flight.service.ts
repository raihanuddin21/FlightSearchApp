import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../_models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFlights(departureAirportCode: string, arrivalAirportCode: string, departureDate: Date, returnDate: Date): Observable<Flight[]> {
    const params = new HttpParams()
      .set('departureAirportCode', departureAirportCode)
      .set('arrivalAirportCode', arrivalAirportCode)
      .set('departureDate', (departureDate === undefined || departureDate === null) ? null : departureDate.toDateString())
      .set('returnDate', (returnDate === undefined || returnDate === null) ? null : returnDate.toDateString())
    return this.http.get<Flight[]>(this.baseUrl + 'flight', { params });
  }

}
