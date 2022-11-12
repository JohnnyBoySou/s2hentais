import React from "react";
import {View, Card } from './styles.js'

import { ThemeContext } from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  defaults
} from 'chart.js';
import { Bar, Line  } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




export default function Grid_2( props ) {
  const item = props?.data
  const { color, font } = React.useContext(ThemeContext)

  defaults.font.family =  font.book;
  const numbers = [1 , 32, 142, 162]
  const labels = ['Março', 'Abril', 'Maio', 'Junho'];
  const numbers2 = [10 , 25, 62, 121]

  const [chartData , setChartData] = React.useState({
    labels,
      datasets: [
        {
          label: 'Visualizações',
          data: numbers,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Acessos',
          data: numbers2,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
  })

  
  React.useEffect(() => {
    setChartData({
      labels,
      datasets: [
        {
          label: 'Visualizações',
          data: numbers,
          borderColor: color.primary,
          backgroundColor: color.primary,
        },
        {
          label: 'Acessos',
          data: numbers2,
          borderColor: color.secundary,
          backgroundColor: color.secundary,
        },
      ],
    });
    
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          color: color.title,
          boxWidth: 15,
          boxHeight: 15,
          font: {
            family: font.medium,
            size: 14,  
          },
      },
    },
      tooltip: {
        bodyFont: {
          family: font.book,
        },
        titleFont: {
          family: font.medium,
        }
    },
    
    
  },
}
  
  


  return (
      <Card>
        <Line options={options} data={chartData} />
      </Card>
   );
}
