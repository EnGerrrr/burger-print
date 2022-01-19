import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: "app-profit",
  templateUrl: "./profit.component.html",
  styleUrls: ["./profit.component.css"],
})
export class ProfitComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public columns: string[] = [
    "Date",
    "Orders",
    "Revenue",
    "AOV",
    "Cost",
    "Profit",
    "Average margin",
  ];

  public hiddenColumns: string[] = [];

  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }

  public isDisabled(columnName: string): boolean {
    return (
      this.columns.length - this.hiddenColumns.length === 0 &&
      !this.isHidden(columnName)
    );
  }

  public hideColumn(columnName: string): void {
    const hiddenColumns = this.hiddenColumns;

    if (!this.isHidden(columnName)) {
      hiddenColumns.push(columnName);
    } else {
      hiddenColumns.splice(hiddenColumns.indexOf(columnName), 1);
    }
  }

  selected = [];

  customizes = [
    { name: "Date" },
    { name: "Views" },
    { name: "ATC" },
    { name: "Initiated Checkouts" },
    { name: "Orders" },
    { name: "ATC rate" },
    { name: "Checkout rate" },
    { name: "Abandoned checkout" },
    { name: "Abandoned rate" },
  ];
  domains = [
    { id: 1, name: "All Domains" },
    { id: 2, name: "30usd.com" },
  ];
  time = [
    { id: 1, name: "All time" },
    { id: 2, name: "Today" },
    { id: 3, name: "Last day" },
    { id: 4, name: "Last 7 days" },
    { id: 5, name: "This month" },
    { id: 6, name: "Last month" },
    { id: 7, name: "Last 30 days" },
    { id: 8, name: "Last 3 months" },
    { id: 9, name: "Customize Date" },
  ];

  users = [
    {
      revenue: 29.44,
      cost: 15.7125,
      campaigns: 1,
      time_value: 1638853200000,
      orders: 1,
      profit: 13.7275,
    },
    {
      revenue: 29.44,
      cost: 15.7125,
      campaigns: 1,
      time_value: 1633924800000,
      orders: 1,
      profit: 13.7275,
    },
    {
      revenue: 53.38,
      cost: 25.925,
      campaigns: 1,
      time_value: 1633665600000,
      orders: 1,
      profit: 27.455,
    },
    {
      revenue: 83.32,
      cost: 45.9375,
      campaigns: 3,
      time_value: 1633579200000,
      orders: 2,
      profit: 37.3825,
    },
    {
      revenue: 290.14,
      cost: 138.0925,
      campaigns: 3,
      time_value: 1632456000000,
      orders: 5,
      profit: 152.0475,
    },
    {
      revenue: 112.14,
      cost: 71.9075,
      campaigns: 2,
      time_value: 1632369600000,
      orders: 3,
      profit: 40.2325,
    },
    {
      revenue: 51.99,
      cost: 16.365,
      campaigns: 1,
      time_value: 1630987200000,
      orders: 1,
      profit: 35.625,
    },
    {
      revenue: 51.99,
      cost: 16.365,
      campaigns: 1,
      time_value: 1630641600000,
      orders: 1,
      profit: 35.625,
    },
    {
      revenue: 21.99,
      cost: 17.24,
      campaigns: 1,
      time_value: 1627358400000,
      orders: 1,
      profit: 4.75,
    },
    {
      revenue: 27.94,
      cost: 14.2125,
      campaigns: 1,
      time_value: 1624420800000,
      orders: 1,
      profit: 13.7275,
    },
  ];

  selecteddomain = this.domains[1].name;
  selectedTime = this.time[0].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;

  ngOnInit() {}

  constructor() {
    // chart=[
    //   {"time_value":1593576000000,"profit":28.405},
    //   {"time_value":1604203200000,"profit":1364.58},
    //   {"time_value":1609477200000,"profit":31.825},
    //   {"time_value":1619841600000,"profit":99.4175},
    //   {"time_value":1622520000000,"profit":27.455},
    //   {"time_value":1625112000000,"profit":4.75},
    //   {"time_value":1630468800000,"profit":263.53},
    //   {"time_value":1633060800000,"profit":78.565},
    //   {"time_value":1638334800000,"profit":13.7275}
    // ]
    this.chartOptions = {
      series: [
        {
          name: "",

          data: [
            28.04, 1364.58, 31.82, 99.41, 27.45, 4.75, 263.53, 78.56, 13.72,
          ],
        },
      ],
      chart: {
        height: 500,
        width: 1400,
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 380,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%",
        },
      },
      dataLabels: {
        enabled: false,
      },

      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
        colors: ["rgb(239, 145, 27);"],
      },
      xaxis: {
        categories: [
          "7/2020",
          "11/2020",
          "1/2021",
          "5/2021",
          "6/2021",
          "7/2021",
          "9/2021",
          "10/2021",
          "12/2021",
        ],
      },
    };
  }
}
