import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService){
  }
  cityName='Delhi';
  WeatherData?: weatherData;
  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
  private getWeatherData(cityName :string){
    return this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response)=>{
        this.WeatherData=response;
        console.log(response);
      }
    })
  }
  
}
