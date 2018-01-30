import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopularService } from './popular.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    HttpModule
  ],
  providers: [
    PopularService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
