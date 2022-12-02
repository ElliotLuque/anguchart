import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/routed/home/home.component';
import { ChartUnroutedComponent } from './components/unrouted/chart-unrouted/chart-unrouted.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartUnroutedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
