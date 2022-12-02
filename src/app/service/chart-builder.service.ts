import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartBuilderService {

  constructor() { }

  buildChart(ctx: string, type: ChartType, data: Array<any>, options: ChartConfiguration['options'] | undefined) {
    Chart.register(...registerables);

    return new Chart(ctx , {
      type,
      data: {
        labels: data.map((data: any) => data.label),
        datasets: [
          {
            label: "test",
            data: data.map((data: any) => data.value),
          }
        ]
      },
      options
    });
  }
}
