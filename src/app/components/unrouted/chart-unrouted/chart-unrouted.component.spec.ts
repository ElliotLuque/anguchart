import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUnroutedComponent } from './chart-unrouted.component';

describe('ChartBuilderComponent', () => {
  let component: ChartUnroutedComponent;
  let fixture: ComponentFixture<ChartUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
