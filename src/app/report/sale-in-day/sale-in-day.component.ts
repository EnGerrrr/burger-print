import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-in-day',
  templateUrl: './sale-in-day.component.html',
  styleUrls: ['./sale-in-day.component.css']
})
export class SaleInDayComponent implements OnInit {
  selected = [];
  // SelectionType = SelectionType;

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

  selectedTime = this.time[1].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;

  constructor() { }

  ngOnInit() {
  }
  searchCampaign(){

  }
}
