import { Time } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @ViewChild('dateString') inputName: any;

  startDatePicker: any;
  endDatePicker: any;
  minDate = '1980-10-28';
  maxDate = '2099-10-28';

  rate1startTime: any;
  rate1endTime: any;

  rate2startTime: any;
  rate2endTime: any;

  rate3startTime: any;
  rate3endTime: any;

  finalTimeHoursCount: any;

  date = {
    valid: false,
    invalid: false,
    range: false
  }

  constructor() {}

  ngOnInit(): void {
  }

  check() {
    let startDate = new Date(this.startDatePicker);
    let endDate = new Date(this.startDatePicker);
    if (Object.prototype.toString.call(startDate) === "[object Date]") {
      if (isNaN(endDate.getTime())) {
        // date is not valid
        this.date.range = false;
        this.date.invalid = true;
        this.inputName.nativeElement.value = '';
      } else {
        // date is valid
        this.date.range = false;
        this.date.invalid = false;
        if(this.startDatePicker < this.minDate || this.startDatePicker > this.maxDate) {
          this.date.invalid = false;
          this.date.range = true;
          this.inputName.nativeElement.value = '';
        }
      }
    }
  }

  checkDate() {
    this.date.valid = true;
    console.log(this.startDatePicker);
  }

  subtractTime() {

    let rate1startHM = this.rate1startTime;
    let rate1endHM = this.rate1endTime;
    let rate2startHM = this.rate2startTime;
    let rate2endHM = this.rate2endTime;
    let rate3startHM = this.rate3startTime;
    let rate3endHM = this.rate3endTime;


    let splitRate1startHm = rate1startHM.split(':');
    let splitRate1endHm = rate1endHM.split(':');
    let splitRate2startHm = rate2startHM.split(':');
    let splitRate2endHm = rate2endHM.split(':');
    let splitRate3startHm = rate3startHM.split(':');
    let splitRate3endHm = rate3endHM.split(':');

    let rate1startseconds = (+splitRate1startHm[0]) * 60 * 60 + (+splitRate1startHm[1]) * 60;
    let rate1endseconds = (+splitRate1endHm[0]) * 60 * 60 + (+splitRate1endHm[1]) * 60;
    let rate2startseconds = (+splitRate2startHm[0]) * 60 * 60 + (+splitRate2startHm[1]) * 60;
    let rate2endseconds = (+splitRate2endHm[0]) * 60 * 60 + (+splitRate2endHm[1]) * 60;
    let rate3startseconds = (+splitRate3startHm[0]) * 60 * 60 + (+splitRate3startHm[1]) * 60;
    let rate3endseconds = (+splitRate3endHm[0]) * 60 * 60 + (+splitRate3endHm[1]) * 60;

    let rate1secondsDifference = rate1endseconds - rate1startseconds
    let rate2secondsDifference = rate2endseconds - rate2startseconds
    let rate3secondsDifference = rate3endseconds - rate3startseconds

    let totalSecond = rate1secondsDifference + rate2secondsDifference + rate3secondsDifference

    this.finalTimeHoursCount = totalSecond / 3600;
  }

}
