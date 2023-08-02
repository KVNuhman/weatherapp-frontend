import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  weatherApiBaseUrl = 'https://weatherapp-backend-production.up.railway.app/weather';
  getWeatherData: any;

  constructor(private http:HttpClient) { }

  getCurrentWeather(cityName : string): Observable<WeatherData>{

    const params = new HttpParams().set('city', cityName);
    return this.http.get<WeatherData>(this.weatherApiBaseUrl, { params });

  }
}
