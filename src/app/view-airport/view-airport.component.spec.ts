import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAirportComponent } from './view-airport.component';

describe('ViewAirportComponent', () => {
  let component: ViewAirportComponent;
  let fixture: ComponentFixture<ViewAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAirportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
