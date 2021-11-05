import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-electricity-tarrif',
  templateUrl: './electricity-tarrif.component.html',
  styleUrls: ['./electricity-tarrif.component.scss']
})
export class ElectricityTarrifComponent implements OnInit {

  formVisible = false;
  rate2Visible = false;
  rate3Visible = false;

  selectedCurrency: string = 'AUD';
  selectedCurrencySymbol: string = '';


  public cancelDialogVisible = false;
  public tariffsForm = this.fb.group({
    tariffs: this.fb.array([]),
});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.selectedCurrencyState();
  }

  public confirmCancel() {
    // this.router.navigate(['/bus-sites']);
  }
  
  public onCancel() {
    if (this.tariffsForm.dirty) {
      this.cancelDialogVisible = true;
    } else {
      // this.router.navigate(['/bus-sites']);
    }
  }

  toggleFormVisibility() {
    this.formVisible = !this.formVisible;
  }

  rate2VisibilityToggle() {
    this.rate2Visible = !this.rate2Visible;
  }

  rate3VisibilityToggle() {
    this.rate3Visible = !this.rate3Visible;
  }

  selectedCurrencyState() {
    if(this.selectedCurrency === 'AUD') {
      this.selectedCurrencySymbol = 'pence'
    }else if(this.selectedCurrency === 'EUR') {
      this.selectedCurrencySymbol = 'cents'
    }else if(this.selectedCurrency === 'GBP') {
      this.selectedCurrencySymbol = 'pence'
    }
  }

}
