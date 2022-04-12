import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
