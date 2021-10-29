import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @ViewChild('dateString') inputName: any;

  datePicker: any;
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
    let date = new Date(this.datePicker);
    if (Object.prototype.toString.call(date) === "[object Date]") {
      if (isNaN(date.getTime())) {
        // date is not valid
        this.date.range = false;
        this.date.invalid = true;
        this.inputName.nativeElement.value = '';
      } else {
        // date is valid
        this.date.range = false;
        this.date.invalid = false;
        if(this.datePicker < this.minDate || this.datePicker > this.maxDate) {
          this.date.invalid = false;
          this.date.range = true;
          this.inputName.nativeElement.value = '';
        }
      }
    }
  }

  checkDate() {
    this.date.valid = true;
    console.log(this.datePicker);
  }

}
