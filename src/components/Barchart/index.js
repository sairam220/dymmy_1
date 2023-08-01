import { Component } from "react";
import Chart from 'react-apexcharts'

class BarChart extends Component {
    constructor(props) {
      super(props);
      const {dayName,credit,debit}=props
      this.state = {
      
        series: [{
          name: 'Debit',
          data: [
            21298,
            8000,
            4500,
            4000,
            14108,
            10001,
            1500,
            19000
        ]
        }, {
          name: 'Credit',
          data: [
            12498,
            11300,
            10001,
            1299,
            15000,
            13000,
            12000,
            10000
        ]
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
