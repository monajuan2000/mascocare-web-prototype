import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared.module';

import { WarningDialogComponent } from './warning-dialog.component';

describe('WarningDialogComponent', () => {
  let component: WarningDialogComponent;
  let fixture: ComponentFixture<WarningDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SharedModule],
    });
    fixture = TestBed.createComponent(WarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
