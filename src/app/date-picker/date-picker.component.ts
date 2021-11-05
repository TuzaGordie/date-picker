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

}
