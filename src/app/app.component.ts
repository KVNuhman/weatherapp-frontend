import { Component } from '@angular/core';
import { WeatherData } from 'src/models/weather.model';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private weatherService: WeatherService){

  }

  cityName: string = 'alaska';
  weatherData ? : WeatherData;

  ngOnInit(): void {
    this.getCurrentWeather(this.cityName);
    console.log(this.weatherData);
  }

  onSubmit(){
    this.getCurrentWeather(this.cityName);
    this.cityName = "";
  }


 private getCurrentWeather(cityName : string){
  this.weatherService.getCurrentWeather(cityName)
    .subscribe({
      next : (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
 }
 
}
