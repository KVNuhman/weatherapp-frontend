import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // weatherApiBseUrl = 'https://openweather43.p.rapidapi.com/weather';
  // XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  // XRapidAPIHostHeaderValue = 'openweather43.p.rapidapi.com';
  // XRapidAPIKeyHeaderName = 'X-RapidAPI-Key';
  // XRapidAPIKeyHeaderValue = '27bbfa8d12mshefafa2986f930a8p109e0fjsn2aaad83c7bac';
  // getWeatherData: any;

  weatherApiBaseUrl = 'http://localhost:9090/weather';
  getWeatherData: any;

  

  constructor(private http:HttpClient) { }

  getCurrentWeather(cityName : string): Observable<WeatherData>{
    // return this.http.get<WeatherData>(this.weatherApiBseUrl, {
    //   headers: new HttpHeaders()
    //   .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
    //   .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
    //   params : new HttpParams()
    //   .set('q', cityName)
    //   .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
    //   .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
    // })

    const params = new HttpParams().set('city', cityName);
    return this.http.get<WeatherData>(this.weatherApiBaseUrl, { params });
    // return this.http.get<WeatherData>(this.weatherApiBseUrl, {
    //   params : new HttpParams()
    //   .set('q', cityName)
    // })
    
    
  }
}
