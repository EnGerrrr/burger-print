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
  selector: "app-sale-report",
  templateUrl: "./sale-report.component.html",
  styleUrls: ["./sale-report.component.css"],
})
export class SaleReportComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public columns: string[] = [
    "Date",
    "Orders",
    "Revenue",
    "AOV",
    "Discounts",
    "Returns",
    "Canceled",
    "Tax",
    "Shipping",
    "Profit",
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
      time_order: 1638853200000,
      canceled: 0,
      revenue: 29.44,
      shipping: 8.49,
      discount: 0,
      tax: 0,
      returns: 0,
      total_orders: 1,
      profit: 13.7275,
    },
    {
      time_order: 1633924800000,
      canceled: 0,
      revenue: 29.44,
      shipping: 8.49,
      discount: 0,
      tax: 0,
      returns: 0,
      total_orders: 1,
      profit: 13.7275,
    },
    {
      time_order: 1633665600000,
      canceled: 0,
      revenue: 53.38,
      shipping: 11.48,
      discount: 0,
      tax: 0,
      returns: 0,
      total_orders: 1,
      profit: 27.455,
    },
    {
      time_order: 1633579200000,
      canceled: 0,
      revenue: 83.32,
      shipping: 24.47,
      discount: 0,
      tax: 0,
      returns: 0,
      total_orders: 2,
      profit: 37.3825,
    },
    {
      time_order: 1632456000000,
      canceled: 0,
      revenue: 290.14,
      shipping: 41.91,
      discount: 0,
      tax: 14.68,
      returns: 0,
      total_orders: 5,
      profit: 152.0475,
    },
    {
      time_order: 1632369600000,
      canceled: 0,
      revenue: 112.14,
      shipping: 23.97,
      discount: 0,
      tax: 1.32,
      returns: 0,
      total_orders: 3,
      profit: 40.2325,
    },
    {
      time_order: 1630987200000,
      canceled: 0,
      revenue: 51.99,
      shipping: 7.99,
      discount: 0,
      tax: 0,
      returns: 0,
      total_orders: 1,
      profit: 35.625,
    },
    {
      time_order: 1630641600000,
      canceled: 0,
      revenue: 51.99,
      shipping: 7.99,
      discount: 0,
      tax: 0,
      returns: 0,
      total_orders: 1,
      profit: 35.625,
    },
    {
      time_order: 1627358400000,
      canceled: 0,
      revenue: 21.99,
      shipping: 7.99,
      discount: 0,
      tax: 0,
      returns: 0,
      total_orders: 1,
      profit: 4.75,
    },
    {
      time_order: 1624420800000,
      canceled: 0,
      revenue: 27.94,
      shipping: 7.99,
      discount: 0,
      tax: 0,
      returns: 0,
      total_orders: 1,
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
    // chart =[
    //   {"time_value":1593576000000,"orders":1},
    //   {"time_value":1604203200000,"orders":4},
    //   {"time_value":1609477200000,"orders":1},
    //   {"time_value":1619841600000,"orders":7},
    //   {"time_value":1622520000000,"orders":2},
    //   {"time_value":1625112000000,"orders":1},
    //   {"time_value":1630468800000,"orders":10},
    //   {"time_value":1633060800000,"orders":4},
    //   {"time_value":1638334800000,"orders":1}
    // ];
    this.chartOptions = {
      series: [
        {
          name: "",

          data: [1, 4, 1, 7, 2, 1, 10, 4, 1],
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
      // title: {
      //   text: "My First Angular Chart"
      // },
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
  searchCampaign() {}
}
