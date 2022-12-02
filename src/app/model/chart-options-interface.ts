export interface IChartOptions {
    title?: {
        display: boolean;
        text: string;
        fontSize: number;
    };
    legend?: {
        position: string;
    };
    scales?: {
        yAxes?: Array<any>;
        xAxes?: Array<any>;
    };
    responsive?: boolean;
    maintainAspectRatio?: boolean;
}