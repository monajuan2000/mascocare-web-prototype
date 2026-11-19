import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../../shared/shared.module';

import { LoginLinksComponent } from './login-links.component';

describe('LoginLinksComponent', () => {
  let component: LoginLinksComponent;
  let fixture: ComponentFixture<LoginLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
    });
    fixture = TestBed.createComponent(LoginLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
