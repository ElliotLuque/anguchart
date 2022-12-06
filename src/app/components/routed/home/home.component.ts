import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { chart1Data, chart1Options, chart2Data, chart2Options, chart3Data } from 'src/assets/exampleData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  chart1Data = chart1Data;
  chart1Options = chart1Options;

  chart2Data = chart2Data;
  chart2Options = chart2Options;

  chart3Data = chart3Data;

  constructor() { }

}
