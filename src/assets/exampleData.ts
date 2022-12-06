import { ChartConfiguration, ChartData } from "chart.js"

export const chart1Options: ChartConfiguration['options'] = {
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

export const chart1Data: ChartData = {
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

export const chart2Options: ChartConfiguration['options'] = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Título de ejemplo'
    }
  }
}

export const chart2Data: ChartData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
  datasets: [
    {
      label: 'Bar set',
      data: [20, 100, 40, 250],
      borderRadius: 5,
    },
  ]
}

export const chart3Data: ChartData = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 50, 100, 40, 120],
    }
  ]
};