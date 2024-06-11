import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingFormComponent } from './logging-form.component';

describe('LoggingFormComponent', () => {
  let component: LoggingFormComponent;
  let fixture: ComponentFixture<LoggingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggingFormComponent]
    });
    fixture = TestBed.createComponent(LoggingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
