import { Component, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
// @ViewChild('contest') contest!:ElementRef;
  
//   @ViewChild('head1') head1!:ElementRef;
//   @ViewChild('head2') head2!:ElementRef;
 
  domains = [
    {
      id: 1,
      name: 'All Domains',
    },
    { id: 2, name: '30usd.com' },
  ];
  
  Time = [
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
  selectedTime = this.Time[0].name;

  selecteddomain = this.domains[0].name;
  time = new Date();
 
  constructor() {}

  ngOnInit(): void {}
  // gethead1(){

  //   this.head2.nativeElement.style.display='none';
  //   this.head1.nativeElement.style.display='block'

  // }
  // gethead2(){
  //   this.head1.nativeElement.style.display='none';
  //   this.head2.nativeElement.style.display='block'
  // }
}

