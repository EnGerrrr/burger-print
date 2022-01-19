import { Component, OnInit, ViewChild } from "@angular/core";
import { DATA } from "./customers";
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
  selector: "app-conversion-funnel",
  templateUrl: "./conversion-funnel.component.html",
  styleUrls: ["./conversion-funnel.component.css"],
})
export class ConversionFunnelComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public columns: string[] = [
    "Date",
    "Views",
    "ATC",
    "Initiated Checkouts",
    "Orders",
    "ATC rate",
    "Checkout rate",
    "Abandoned checkout",
    "Abandoned rate",
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

  public data: any[];

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
      atc: 0,
      time_value: 1640754000000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 5,
    },
    {
      atc: 0,
      time_value: 1639544400000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 2,
    },
    {
      atc: 0,
      time_value: 1639458000000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 2,
    },
    {
      atc: 1,
      time_value: 1638939600000,
      paid: 0,
      abandoned: 0,
      checkout: 1,
      views: 1,
    },
    {
      atc: 1,
      time_value: 1638853200000,
      paid: 1,
      abandoned: 0,
      checkout: 1,
      views: 3,
    },
    {
      atc: 0,
      time_value: 1638421200000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 2,
    },
    {
      atc: 0,
      time_value: 1638334800000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 3,
    },
    {
      atc: 0,
      time_value: 1637730000000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 2,
    },
    {
      atc: 1,
      time_value: 1637298000000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 3,
    },
    {
      atc: 0,
      time_value: 1636952400000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 1,
    },
    {
      atc: 0,
      time_value: 1636520400000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 2,
    },
    {
      atc: 0,
      time_value: 1636434000000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 2,
    },
    {
      atc: 0,
      time_value: 1636171200000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 1,
    },
    {
      atc: 0,
      time_value: 1636084800000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 7,
    },
    {
      atc: 0,
      time_value: 1635998400000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 6,
    },
    {
      atc: 0,
      time_value: 1635912000000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 1,
    },
    {
      atc: 0,
      time_value: 1635825600000,
      paid: 0,
      abandoned: 0,
      checkout: 0,
      views: 1,
    },
    // {"atc":0,"time_value":1635393600000,"paid":0,"abandoned":0,"checkout":0,"views":6},
    // {"atc":0,"time_value":1635307200000,"paid":0,"abandoned":0,"checkout":0,"views":4},
    // {"atc":0,"time_value":1634875200000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":0,"time_value":1634788800000,"paid":0,"abandoned":0,"checkout":0,"views":3},
    // {"atc":0,"time_value":1634702400000,"paid":0,"abandoned":0,"checkout":0,"views":3},
    // {"atc":0,"time_value":1634616000000,"paid":0,"abandoned":0,"checkout":0,"views":3},
    // {"atc":0,"time_value":1634529600000,"paid":0,"abandoned":0,"checkout":0,"views":14},
    // {"atc":0,"time_value":1634356800000,"paid":0,"abandoned":0,"checkout":0,"views":2},
    // {"atc":0,"time_value":1634270400000,"paid":0,"abandoned":0,"checkout":0,"views":5},
    // {"atc":0,"time_value":1634184000000,"paid":0,"abandoned":0,"checkout":0,"views":11},
    // {"atc":1,"time_value":1634097600000,"paid":0,"abandoned":1,"checkout":1,"views":7},
    // {"atc":0,"time_value":1634011200000,"paid":0,"abandoned":0,"checkout":0,"views":6},
    // {"atc":1,"time_value":1633924800000,"paid":1,"abandoned":0,"checkout":1,"views":7},
    // {"atc":0,"time_value":1633838400000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":1,"time_value":1633665600000,"paid":1,"abandoned":0,"checkout":1,"views":6},
    // {"atc":6,"time_value":1633579200000,"paid":2,"abandoned":1,"checkout":6,"views":24},
    // {"atc":0,"time_value":1633492800000,"paid":0,"abandoned":0,"checkout":0,"views":8},
    // {"atc":0,"time_value":1633406400000,"paid":0,"abandoned":0,"checkout":0,"views":3},
    // {"atc":0,"time_value":1633060800000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":0,"time_value":1632801600000,"paid":0,"abandoned":0,"checkout":0,"views":2},
    // {"atc":0,"time_value":1632715200000,"paid":0,"abandoned":0,"checkout":0,"views":4},
    // // {"atc":5,"time_value":1632456000000,"paid":5,"abandoned":0,"checkout":5,"views":5},
    // // {"atc":3,"time_value":1632369600000,"paid":3,"abandoned":0,"checkout":3,"views":3},
    // {"atc":0,"time_value":1632283200000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":0,"time_value":1631246400000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":0,"time_value":1631160000000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":1,"time_value":1630987200000,"paid":1,"abandoned":0,"checkout":1,"views":1},
    // {"atc":1,"time_value":1630641600000,"paid":1,"abandoned":0,"checkout":1,"views":1},
    // {"atc":0,"time_value":1630555200000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":1,"time_value":1630382400000,"paid":0,"abandoned":0,"checkout":1,"views":3},
    // {"atc":0,"time_value":1630296000000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":0,"time_value":1630209600000,"paid":0,"abandoned":0,"checkout":0,"views":1},
    // {"atc":0,"time_value":1630036800000,"paid":0,"abandoned":0,"checkout":0,"views":5}
  ];

  // charts = [
  //   { atc: 12, time_value: 1535774400000, orders: 0, checkout: 0, views: 144 },
  //   { atc: 69, time_value: 1538366400000, orders: 0, checkout: 0, views: 41 },
  //   { atc: 71, time_value: 1541044800000, orders: 0, checkout: 0, views: 12 },
  //   { atc: 78, time_value: 1543640400000, orders: 0, checkout: 0, views: 580 },
  //   { atc: 78, time_value: 1546318800000, orders: 0, checkout: 0, views: 291 },
  //   { atc: 17, time_value: 1548997200000, orders: 0, checkout: 0, views: 105 },
  //   { atc: 10, time_value: 1551416400000, orders: 0, checkout: 0, views: 236 },
  //   { atc: 20, time_value: 1554091200000, orders: 0, checkout: 0, views: 240 },
  //   { atc: 68, time_value: 1556683200000, orders: 0, checkout: 0, views: 24 },
  //   { atc: 64, time_value: 1559361600000, orders: 0, checkout: 0, views: 13 },
  //   { atc: 32, time_value: 1561953600000, orders: 0, checkout: 0, views: 118 },
  //   { atc: 13, time_value: 1564632000000, orders: 0, checkout: 0, views: 84 },
  //   { atc: 15, time_value: 1567310400000, orders: 0, checkout: 0, views: 31 },
  //   { atc: 11, time_value: 1569902400000, orders: 0, checkout: 0, views: 57 },
  //   { atc: 3, time_value: 1572580800000, orders: 0, checkout: 0, views: 88 },
  //   { atc: 32, time_value: 1575176400000, orders: 0, checkout: 0, views: 83 },
  //   { atc: 0, time_value: 1577854800000, orders: 0, checkout: 0, views: 15 },
  //   { atc: 1, time_value: 1580533200000, orders: 0, checkout: 0, views: 69 },
  //   { atc: 0, time_value: 1583038800000, orders: 0, checkout: 0, views: 13 },
  //   { atc: 0, time_value: 1585713600000, orders: 0, checkout: 0, views: 39 },
  //   { atc: 0, time_value: 1588305600000, orders: 0, checkout: 0, views: 5 },
  //   { atc: 1, time_value: 1590984000000, orders: 0, checkout: 0, views: 14 },
  //   { atc: 1, time_value: 1593576000000, orders: 1, checkout: 1, views: 24 },
  //   { atc: 0, time_value: 1596254400000, orders: 0, checkout: 0, views: 5 },
  //   { atc: 1, time_value: 1598932800000, orders: 0, checkout: 0, views: 17 },
  //   { atc: 0, time_value: 1601524800000, orders: 0, checkout: 0, views: 12 },
  //   { atc: 4, time_value: 1604203200000, orders: 4, checkout: 4, views: 8 },
  //   { atc: 0, time_value: 1606798800000, orders: 0, checkout: 0, views: 12 },
  //   { atc: 1, time_value: 1609477200000, orders: 1, checkout: 1, views: 0 },
  //   { atc: 7, time_value: 1619841600000, orders: 7, checkout: 7, views: 0 },
  //   { atc: 3, time_value: 1622520000000, orders: 2, checkout: 2, views: 1 },
  //   { atc: 2, time_value: 1625112000000, orders: 1, checkout: 1, views: 8 },
  //   { atc: 4, time_value: 1627790400000, orders: 0, checkout: 2, views: 21 },
  //   { atc: 10, time_value: 1630468800000, orders: 10, checkout: 10, views: 20 },
  //   { atc: 9, time_value: 1633060800000, orders: 4, checkout: 9, views: 115 },
  //   { atc: 1, time_value: 1635739200000, orders: 0, checkout: 0, views: 26 },
  //   { atc: 2, time_value: 1638334800000, orders: 1, checkout: 2, views: 18 },
  // ];

  // selectedcustomize = this.customize.name;
  selecteddomain = this.domains[1].name;
  selectedTime = this.time[0].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;

  public ngOnInit() {
    // this.data = DATA;
  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Add to car",

          data: [
            12, 69, 71, 78, 78, 17, 10, 20, 68, 64, 32, 13, 15, 11, 3, 32, 0, 1,
            0, 0, 0, 1, 1, 0, 1, 0, 4, 0, 1, 7, 3, 2, 4, 10, 9, 1, 2,
          ],
        },
        {
          name: "Orders",
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 4, 0, 1, 7, 2, 1, 0, 10, 4, 0, 1,
          ],
        },

        {
          name: "Total-views",
          data: [
            144, 41, 12, 580, 291, 105, 236, 240, 24, 13, 118, 84, 31, 57, 88,
            83, 15, 69, 13, 39, 5, 14, 24, 5, 17, 12, 8, 12, 0, 0, 1, 8, 21, 20,
            115, 26, 18,
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
          columnWidth: "70%",
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
      },
      xaxis: {
        categories: [
          "9/2018",
          "10/2018",
          "11/2018",
          "12/2018",
          "1/2019",
          "2/2019",
          "3/2019",
          "4/2019",
          "5/2019",
          "6/2019",
          "7/2019",
          "8/2019",
          "9/2019",
          "10/2019",
          "11/2019",
          "12/2019",
          "1/2020",
          "2/2020",
          "3/2020",
          "4/2020",
          "5/2020",
          "6/2020",
          "7/2020",
          "8/2020",
          "9/2020",
          "10/2020",
          "11/2020",
          "12/2020",
          "1/2021",
          "2/2021",
          "3/2021",
          "4/2021",
          "5/2021",
          "6/2021",
          "7/2021",
          "8/2021",
          "9/2021",
          "10/2021",
          "11/2021",
          "12/2021",
        ],
      },
    };
  }
}
