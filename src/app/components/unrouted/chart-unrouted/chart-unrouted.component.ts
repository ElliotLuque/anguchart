import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ChartBuilderService } from 'src/app/service/chart-builder.service';

@Component({
  selector: 'app-chart-unrouted',
  templateUrl: './chart-unrouted.component.html',
  styleUrls: ['./chart-unrouted.component.css']
})
export class ChartUnroutedComponent implements AfterViewInit {

  @Input() type: ChartType;
  @Input() data: ChartData;
  @Input() options?: ChartConfiguration['options'];

  @ViewChild('chart') canvas?: ElementRef;

  constructor(private chartBuilderService: ChartBuilderService) {
    this.type = 'line';
    this.data = {labels: [], datasets: []};
  } 

  ngAfterViewInit(): void {
    const ctx = this.canvas?.nativeElement.getContext('2d');
    this.chartBuilderService.buildChart(ctx, this.type, this.data, this.options);
  }

}
