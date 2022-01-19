import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
// import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';
import { AuthenticationService } from '@/_services';
import { Observable } from 'rxjs';

declare const moment: any;

@Component({
  selector: 'filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDateComponent implements OnInit, OnDestroy {

  @Output() searchTimeStart = new EventEmitter<any>();
  @Output() searchTimeEnd = new EventEmitter<any>();
  @Output() handleFilterData = new EventEmitter<any>();
  @Output() selectedTime = new EventEmitter<any>();
  @Input() chooseChangeAutoLoad = false;
  @Input() showLabelTime = true;
  @Input() textDescAlign = 'right';
  @Input() textDescPaddingR = '0';
  @Input() startTime = '0';
  @Input() startTimeLabel = 'Today';
  @Input() reRenderData: Observable<any>;
  public timeFilter = [
    { day_space: 'all', label: 'All time' },
    { day_space: '0', label: 'Today' },
    { day_space: '1', label: 'Yesterday' },
    { day_space: '7', label: 'Last 7 days' },
    { day_space: '28', label: 'Last 28 days' },
    { day_space: '1m', label: 'This month' },
    { day_space: '-1m', label: 'Last month' },
    // { day_space: 'custom', label: 'Custom time' },
  ];
  // public startTime = '0';
  public search = { start_time: '', end_time: '' };
  public showCustomDate = false;
  public hideSelectDate = false;
  // public startTimeLabel: string = 'Today';
  public timeZone: string;
  public showStartTime: string;
  public showEndTime: string;
  timeCreateUser;

  /* myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'yyyy / mm / dd',
    editableDateRangeField: false
  }; */

  constructor(private cd: ChangeDetectorRef, private authenticationService: AuthenticationService, ) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => {
      if (user) {
        this.timeCreateUser = user.create_time;
        let timeUser;
        timeUser = user.timezone || 'UTC-04:00';
        timeUser = timeUser.split('C');
        this.timeZone = timeUser[1];
        this.setDateDefault();
        if (this.reRenderData) {
          this.reRenderData.subscribe(data => {
            if (data) {
              const value = JSON.parse(data);
              this.startTime = value.startTime;
              this.startTimeLabel = value.startTimeLabel;
              this.setDateDefault();
              this.cd.markForCheck();
            }
          });
        }
      }
    });
  }

  ngOnDestroy() {
    this.startTime = '28';
  }

  public setDateDefault() {
    const today = new Date();
    let start_date;
    if (this.startTime == 'all') {
      start_date = moment(this.timeCreateUser).utcOffset(this.timeZone).set({ hours: 0, minutes: 0 }).format('MMM DD, YYYY hh:mm A');
    } else {
      const start = parseInt(this.startTime);
      start_date = moment().subtract(start, 'day').utcOffset(this.timeZone).set({ hours: 0, minutes: 0 }).format('MMM DD, YYYY hh:mm A');
    }

    const end_date = moment(today).utcOffset(this.timeZone).format('MMM DD, YYYY hh:mm:ss A');
    const show_end_date = moment(today).utcOffset(this.timeZone).format('MMM DD, YYYY hh:mm A');

    this.showStartTime = start_date;
    this.showEndTime = show_end_date;

    const start_date_call = Date.parse(start_date);
    const end_date_call = Date.parse(end_date);

    this.searchTimeStart.emit(start_date_call);
    this.searchTimeEnd.emit(end_date_call);
    if (this.chooseChangeAutoLoad) {
      this.handleFilterData.emit();
    }
    this.selectedTime.emit({ val: this.startTime, label: this.startTimeLabel });
  }

  // Search data change time
  public searchDate(val) {
    const today = new Date(), currentYear = today.getFullYear(), currentMonth = today.getMonth();
    if (val == 'custom') {
      this.hideSelectDate = true;
      this.showCustomDate = true;
    } else if (val === '1m') {
      this.showCustomDate = false;
      this.hideSelectDate = false;
      const start_date = moment().utcOffset(this.timeZone).set({ date: 1, hours: 0, minutes: 0 }).format('MMM DD, YYYY hh:mm A');
      const end_date = moment(today).utcOffset(this.timeZone);

      this.setStartEndDate(start_date, end_date);
    } else if (val === '-1m') {
      this.showCustomDate = false;
      this.hideSelectDate = false;
      const start_date = moment().subtract(1, 'month').utcOffset(this.timeZone).set({ date: 1, hours: 0, minutes: 0 }).format('MMM DD, YYYY hh:mm A');
      const end_date = moment(today).utcOffset(this.timeZone).subtract(1, 'months').endOf('month');
      this.setStartEndDate(start_date, end_date);
    } else if (val == 'all') {
      this.showCustomDate = false;
      this.hideSelectDate = false;

      const start_date = moment(this.timeCreateUser).utcOffset(this.timeZone).set({ hours: 0, minutes: 0 }).format('MMM DD, YYYY hh:mm A');
      const end_date = moment(today).utcOffset(this.timeZone);
      this.setStartEndDate(start_date, end_date);
    } else {
      this.showCustomDate = false;
      this.hideSelectDate = false;
      const start = Number(val);
      let start_date;
      let end_date;
      if (start === 0) {
        start_date = moment().utcOffset(this.timeZone).startOf('day').format('MMM DD, YYYY hh:mm A');
        end_date = moment(today).utcOffset(this.timeZone);
      } else {
        start_date = moment().utcOffset(this.timeZone).subtract(start, 'day').startOf('day').format('MMM DD, YYYY hh:mm A');
        end_date = moment().utcOffset(this.timeZone).subtract(1, 'days').endOf('day');
      }
      this.setStartEndDate(start_date, end_date);
    }
  }

  public setStartEndDate(start_date, end_date) {
    const show_end_date = end_date.format('MMM DD, YYYY hh:mm A');
    const end_date_emit = end_date.format('MMM DD, YYYY hh:mm:ss A');
    const start_date_call = Date.parse(start_date);
    const end_date_call = Date.parse(end_date_emit);

    this.showStartTime = start_date;
    this.showEndTime = show_end_date;
    this.searchTimeStart.emit(start_date_call);
    this.searchTimeEnd.emit(end_date_call);
    if (this.chooseChangeAutoLoad) {
      this.handleFilterData.emit();
    }
  }

  // Search data time range
  /* public onDateRangeChanged(event: IMyDateRangeModel) {
    const today = new Date();
    if (event.beginEpoc !== 0 && event.endEpoc !== 0) {
      const start = event.beginDate.year + '/' + event.beginDate.month + '/' + event.beginDate.day;
      const end = event.endDate.year + '/' + event.endDate.month + '/' + event.endDate.day;
      const end_date = moment(end).set({ hours: 23, minutes: 59, seconds: 59 }).format('MMM DD, YYYY hh:mm:ss A');
      const show_end_date = moment(end).set({ hours: 23, minutes: 59, seconds: 59 }).format('MMM DD, YYYY hh:mm A');

      const start_date = moment(start).set({ hours: 0, minutes: 0 }).format('MMM DD, YYYY hh:mm A');
      this.showStartTime = start_date;
      this.showEndTime = show_end_date;

      const start_date_call = Date.parse(start_date);
      const end_date_call = Date.parse(end_date);

      this.searchTimeStart.emit(start_date_call);
      this.searchTimeEnd.emit(end_date_call);
      if (this.chooseChangeAutoLoad) {
        this.handleFilterData.emit();
      }
    } else {
      this.showCustomDate = false;
      this.hideSelectDate = false;
      this.startTime = 'all';
      this.startTimeLabel = 'All time';
      const timeCreateUser = localStorage.getItem('ucda');
      const start_date = moment(timeCreateUser).zone(this.timeZone).set({ hours: 0, minutes: 0 }).format('MMM DD, YYYY hh:mm A');
      const end_date = moment(today).zone(this.timeZone).format('MMM DD, YYYY hh:mm:ss A');
      const show_end_date = moment(today).zone(this.timeZone).format('MMM DD, YYYY hh:mm A');
      const start_date_call = Date.parse(start_date);
      const end_date_call = Date.parse(end_date);

      this.showStartTime = start_date;
      this.showEndTime = show_end_date;
      this.searchTimeStart.emit(start_date_call);
      this.searchTimeEnd.emit(end_date_call);

      if (this.chooseChangeAutoLoad) {
        this.handleFilterData.emit();
      }
    }
  } */

  public setTimeFilter(val, label) {
    this.startTime = val;
    this.startTimeLabel = label;
    this.selectedTime.emit({ val: val, label: label });
    this.searchDate(val);
  }
}
