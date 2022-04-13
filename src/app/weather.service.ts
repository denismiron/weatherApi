import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = "https://api.openweathermap.org/data/2.5/weather"
  apiWeatherKey = "1776e42ba911e904cbf1ca181326d093"
  constructor(private http: HttpClient) {
  }

  getWeatherDataByCoords( lat: any, lon: any ) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apiWeatherKey)

    return this.http.get(this.url, {params})
  }
  getWeatherDataByCityName(city:string){
      let params = new HttpParams()
        .set('q',city)
        .set('units','imperial')
        .set('appid',this.apiWeatherKey)
    return this.http.get(this.url, {params})
  }
}
