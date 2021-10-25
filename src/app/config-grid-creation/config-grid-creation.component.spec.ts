import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigGridCreationComponent } from './config-grid-creation.component';

describe('ConfigGridCreationComponent', () => {
  let component: ConfigGridCreationComponent;
  let fixture: ComponentFixture<ConfigGridCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigGridCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigGridCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
