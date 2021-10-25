import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateWaterflowComponent } from './simulate-waterflow.component';

describe('SimulateWaterflowComponent', () => {
  let component: SimulateWaterflowComponent;
  let fixture: ComponentFixture<SimulateWaterflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateWaterflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateWaterflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
