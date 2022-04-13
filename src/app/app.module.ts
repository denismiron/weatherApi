import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AgmCoreModule} from "@agm/core";



@NgModule({
  declarations: [
    AppComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyC5B_nXwvOjiYQioyE9j6rw9OsFCDgq_jU'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
