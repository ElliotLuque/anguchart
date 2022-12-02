import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exampleOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Título de ejemplo'
      }
    }
  }

  exampleData: ChartData = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30, 40],      
      },
      {
        label: 'Dataset 2',
        data: [50, 60, 20, 80],
        tension: 0.5
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
