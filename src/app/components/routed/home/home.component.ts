import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  declare chart1Data: ChartData;;
  declare chart1Options: ChartConfiguration['options'];
  declare chart2Data: ChartData;
  declare chart2Options: ChartConfiguration['options'];

  chart3Data: ChartData

  constructor() { 
    this.chart3Data = {labels: [], datasets: []};
  }

  ngOnInit(): void {
  }

}
