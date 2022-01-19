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
  selector: "app-abandoned-checkout",
  templateUrl: "./abandoned-checkout.component.html",
  styleUrls: ["./abandoned-checkout.component.css"],
})
export class AbandonedCheckoutComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public columns: string[] = [
    "Date",
    "Customer name",
    "Email address",
    "Phone number",
    "Order quantity",
    "Cart",
    "Status",
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
      id: "A775-8804-APTS-90727",
      domain: "30usd.com",
      source: "",
      state: "created",
      order_date: "20211013T032531Z",
      name: "Nguyen Paul",
      email: "hungdt@leadsgen.asia",
      country_name: "United States",
      fulfill_state: "",
      profit: "",
      sequence: "",
      tracking: "",
      payout_processed: 0,
      phone: "",
      checkout_stage: "checkout",
      quantity: 1,
      amount: 36.14,
      product_name: "Tee 3D - Colorful - 3XL",
    },
    {
      id: "A775-8793-ACCM-90564",
      domain: "30usd.com",
      source: "",
      state: "created",
      order_date: "20211007T003543Z",
      name: "Bernd Unterberger DHL Packstation 116",
      email: "phongling77@gmail.com",
      country_name: "United States",
      fulfill_state: "",
      profit: "",
      sequence: "",
      tracking: "",
      payout_processed: 0,
      phone: "0973841799",
      checkout_stage: "checkout",
      quantity: 1,
      amount: 20.94,
      product_name: "Personalize Mug - White - 15oz",
    },
    {
      id: "A2075-4360-APHW-85849",
      domain: "30usd.com",
      source: "",
      state: "created",
      order_date: "20210818T213039Z",
      name: "Nguyễn Linh",
      email: "linhnguyen311220@gmail.com",
      country_name: "Việt Nam",
      fulfill_state: "",
      profit: "",
      sequence: "",
      tracking: "",
      payout_processed: 0,
      phone: "1111",
      checkout_stage: "checkout",
      quantity: 2,
      amount: 37.98,
      product_name: "Kids Tee - Royal - L",
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
    //   {"time_value":1629345600000,"cart":37.98},
    //   {"time_value":1633579200000,"cart":20.94},
    //   {"time_value":1634097600000,"cart":36.14}]}

    this.chartOptions = {
      series: [
        {
          name: "",

          data: [37.98, 36.14],
        },
        {
          name: "",

          data: [0, 20.94],
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
          columnWidth: "90%",
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
        categories: ["8/2021", "9/2021"],
      },
    };
  }
  searchCampaign() {}
}
