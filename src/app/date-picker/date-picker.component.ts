import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  datePicker: any;
  minDate = '1980-10-28';
  maxDate = '2099-09-08';

  constructor() { }

  ngOnInit(): void {
  }

}
