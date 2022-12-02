import { Component, Input, OnInit } from '@angular/core';
import { ChartItem, ChartType } from 'chart.js';
import { IChartOptions } from 'src/app/model/chart-options-interface';
import { ChartBuilderService } from 'src/app/service/chart-builder.service';

@Component({
  selector: 'app-chart-unrouted',
  templateUrl: './chart-unrouted.component.html',
  styleUrls: ['./chart-unrouted.component.css']
})
export class ChartUnroutedComponent implements OnInit {

  @Input() chartType: ChartType = 'line';
  @Input() chartData: Array<any> = [];
  @Input() chartOptions?: IChartOptions | undefined;
  @Input() canvasId: string = 'chart-1';

  constructor(private chartBuilderService: ChartBuilderService) { } 

  ngOnInit(): void {
    this.buildChart(this.canvasId, this.chartType, this.chartData, this.chartOptions);
  }

  buildChart(canvasId: string, chartType: ChartType, chartData: Array<any>, chartOptions: IChartOptions | undefined) {
    return this.chartBuilderService.buildChart(canvasId, chartType, chartData, chartOptions);
  }

}
