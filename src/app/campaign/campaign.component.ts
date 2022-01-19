import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  selected = [];
  // SelectionType = SelectionType;

  domains = [
    {
      id: 1,
      name: 'All Domains',
    },
    { id: 2, name: '30usd.com' },
  ];
  actives = [
    {
      id: 1,
      name: 'Status',
      value: 'Status',
    },
    { id: 2, name: 'Active', value: 'Active' },
    {
      id: 3,
      name: 'Ended',
      value: 'Ended',
    },
    { id: 4, name: 'Locked', value: 'Locked' },
  ];
  time = [
    {
      id: 1,
      name: 'Today',
    },
    { id: 2, name: 'All time' },
    {
      id: 3,
      name: 'Last day',
    },
    { id: 4, name: 'This month' },
    {
      id: 5,
      name: 'Last month',
    },
    { id: 6, name: 'Last 30 days' },
    {
      id: 7,
      name: 'Last 3 months',
    },
    { id: 8, name: 'Customize Date' },
  ];
  selectedTime = this.time[0].name;
  selectedactive = this.actives[0].name;
  selecteddomain = this.domains[0].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;

  constructor() { }

  ngOnInit() {
  }
  searchCampaign(){

  }
}
