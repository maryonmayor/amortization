import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortComponent } from './amort.component';

describe('AmortComponent', () => {
  let component: AmortComponent;
  let fixture: ComponentFixture<AmortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
