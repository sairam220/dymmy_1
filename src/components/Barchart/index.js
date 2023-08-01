import { Component } from "react";
import Chart from 'react-apexcharts'

class BarChart extends Component {
    constructor(props) {
      super(props);
      const {dayName,credit,debit}=props
      this.state = {
      
        series: [{
          name: 'Debit',
          data: debit
        }, {
          name: 'Credit',
          data: credit
        }, ],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['#4D78FF','#FCAA0B']
          },
          xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
          },
          yaxis: {
            title: {
              text: ''
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

    <div id="chart">
        <Chart  options={this.state.options} series={this.state.series} type="bar" height={350} />
    </div>


      );
    }
  }

  export default BarChart
