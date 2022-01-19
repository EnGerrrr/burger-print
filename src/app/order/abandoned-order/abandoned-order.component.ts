import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abandoned-order',
  templateUrl: './abandoned-order.component.html',
  styleUrls: ['./abandoned-order.component.css']
})
export class AbandonedOrderComponent implements OnInit {
  selected = [];
  // SelectionType = SelectionType;

  domains = [
    { id: 1, name: 'All Domains'},
    { id: 2, name: '30usd.com' },
  ];
  status = [
    { id: 1, name: 'All fulfill', value: 'All fulfill' },
    { id: 2, name: 'Unfulfilled', value: 'Unfulfilled' },
    { id: 3, name: 'Fulfilled', value: 'Fulfilled' },
  ];
  actives = [
    { id: 1, name: 'Order status', value: 'Order status' },

  ];
  time = [
    { id: 1, name: 'All time'},
    { id: 2, name: 'Today' },
    { id: 3, name: 'Last day'},
    { id: 4, name: 'Last 7 days' },
    { id: 5, name: 'This month'},
    { id: 6, name: 'Last month' },
    { id: 7, name: 'Last 30 days'},
    { id: 8, name: 'Last 3 months'},
    { id: 9, name: 'Customize Date' },
  ];
  country = [
    { id: 1, name: 'All country'},
    { id: 2, name: 'Afghanistan'},
    { id: 3, name: 'Aland Islands'},
    { id: 4, name: 'Albania'},
    { id: 5, name: 'Algeria'},
  ];

  selectedTime = this.time[0].name;
  selectedactive = this.actives[0].name;
  selecteddomain = this.domains[0].name;
  selectedcountry = this.country[0].name;
  selectedstatus = this.status[0].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;

  constructor() { }

  ngOnInit() {
  }
  searchCampaign(){

  }
}
