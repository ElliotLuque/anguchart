import { Injectable } from '@angular/core';
import { IChartOptions } from '../model/chart-options-interface';
import { Chart, ChartItem, ChartType , registerables  } from 'chart.js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartBuilderService {

  /* public generateChartId = new BehaviorSubject<string>('chart-1'); */

  constructor() { }

  buildChart(canvasId: string, chartType: ChartType, chartData: Array<any>, chartOptions: IChartOptions | undefined = {scales: {yAxes: [{ticks: {beginAtZero: true}}]}}) {
    Chart.register(...registerables);

    /* if (this.generateChartId.value === 'chart-1') {
      const chartSplited = this.generateChartId.value.split('-');
      const chartNumber = Number(chartSplited[1]) + 1;
      const newId = 'chart-' + chartNumber;

      this.generateChartId.next(newId);
      console.log(this.generateChartId.value);
    } */

    return new Chart(document.getElementById(canvasId) as HTMLCanvasElement , {
      type: chartType,
      data: {
        labels: chartData.map((data: any) => data.label),
        datasets: [
          {
            label: "test",
            data: chartData.map((data: any) => data.value),
          }
        ]
      }
    });
  }
}
