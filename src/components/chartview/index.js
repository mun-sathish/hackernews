import React, { Component } from 'react';
import './index.css';
import Highcharts from "highcharts";
import ReactHighcharts from "highcharts-react-official";
require("highcharts/modules/map")(Highcharts);

Highcharts.setOptions({
    lang: {
        numericSymbols: ["K", "M", "B"]
    },
    credits: {
        enabled: false
    }
});

export default class ChartComponent extends Component {
    render() {
        const { data, currentTheme } = this.props;

        let labels = undefined,
            ourData = undefined;
        labels =
            data &&
            data.map((item) => {
                return [item.objectID];
            });

        ourData =
            data &&
            data.map((item) => {
                return [item.points];
            });

        const options = {
            chart: {
                renderTo: "container",
                height: 300,
                backgroundColor: currentTheme.textContrast
            },
            title: {
                text: ""
            },
            legend: {
                enabled: false,
                layout: "vertical",
                align: "center",
                verticalAlign: "top",
                symbolWidth: 20,
                symbolRadius: 10,
                symbolHeight: 0
            },
            xAxis: {
                title: { text: "" },
                categories: labels,
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                tickLength: 5,
                tickWidth: 1,
                lineWidth: 1,
                tickInterval: 1
            },
            yAxis: {
                title: { text: "" },
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                tickLength: 5,
                tickWidth: 1,
                lineWidth: 1
            },
            series: [
                {
                    type: "line",
                    name: "Up Votes",
                    data: ourData,
                    zIndex: 10,
                    color: "#267CB2"
                }
            ],
            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: currentTheme.textContrast,
                        lineWidth: 2,
                        symbol: "circle",
                        radius: 6,
                        lineColor: undefined
                    },
                    dataLabels: {
                        align: "center"
                    },
                    label: {
                        connectorAllowed: false
                    }
                }
            }
        };
        return (
            <div>
                <ReactHighcharts
                    highcharts={Highcharts}
                    constructorType="chart"
                    options={options}
                />
            </div>
        );
    }
}