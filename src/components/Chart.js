import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData1: {
        labels: [
          "BC",
          "AB",
          "SK",
          "MB",
          "ON",
          "QC",
          "NB",
          "NL",
          "NS",
          "PE",
          "YT",
          "NT",
          "NU"
        ],
        datasets: [
          {
            label: "Population",
            data: [61594, 181045, 153060, 106519, 105162, 95062],

            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ],

            borderWidth: 1,
            borderColor: "#777",
            hoverBorderColor: "#000",
            hoverBorderWidth: 3
          }
        ]
      },
      chartData2: {
        labels: [
          "BC",
          "AB",
          "SK",
          "MB",
          "ON",
          "QC",
          "NB",
          "NL",
          "NS",
          "PE",
          "YT",
          "NT",
          "NU"
        ],
        datasets: [
          {
            label: "",
            data: [28, 20, 25, 23, 16, 50, 0, 0, 42, 14, 0, 0],

            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ],

            borderWidth: 1,
            borderColor: "#777",
            hoverBorderColor: "#000",
            hoverBorderWidth: 3
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="chart">
        {/* To change the type of graph */}
        <Bar
          data={this.state.chartData2}
          height={100}
          options={{
            title: {
              display: true,
              text: "Chart 2",
              fontSize: 25
            },
            yAxes: {
              type: "linear",
              position: "right",
              scalePositionLeft: false,
              min: 0,
              max: 100
            },
            //set legend to false to remove it
            legend: {
              display: false,
              position: "bottom"
            }
          }}
        />
      </div>
    );
  }
}
