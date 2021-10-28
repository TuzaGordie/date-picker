import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  datePicker: any;
  minDate = '1980-10-28';
  maxDate = '2099-10-28';

  date = {
    valid: false,
    invalid: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

  checkDate() {
    this.date.valid = false;
    if(this.datePicker < this.minDate || this.datePicker > this.maxDate) {
      this.date.invalid = true;
      console.log('yes')
      this.datePicker = ''
    } else{
      this.date.invalid = false;
      this.date.valid = true;
    }
  }

}
