import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/routed/home/home.component';
import { ChartBuilderComponent } from './components/unrouted/chart-builder/chart-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
