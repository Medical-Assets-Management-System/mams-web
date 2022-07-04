import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        colors: ["#1AB07A", "#E91E63", "#9C27B0"],

        xaxis: {
          categories: [
            ["John", "Doe"],
            ["Joe", "Smith"],
            ["Jake", "Williams"],
            "Amber",
            ["Peter", "Brown"],
            ["Mary", "Evans"],
            ["David", "Wilson"],
            ["Lily", "Roberts"],
          ],
          labels: {
            style: {
              colors: ["#1AB07A", "#E91E63", "#9C27B0"],
              fontSize: "12px",
            },
          },
        },
      },
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 300],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
