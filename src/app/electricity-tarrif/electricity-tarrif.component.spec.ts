import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityTarrifComponent } from './electricity-tarrif.component';

describe('ElectricityTarrifComponent', () => {
  let component: ElectricityTarrifComponent;
  let fixture: ComponentFixture<ElectricityTarrifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityTarrifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityTarrifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
