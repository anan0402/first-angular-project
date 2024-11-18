import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstActionComponent } from './first-action.component';

describe('FirstActionComponent', () => {
  let component: FirstActionComponent;
  let fixture: ComponentFixture<FirstActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
