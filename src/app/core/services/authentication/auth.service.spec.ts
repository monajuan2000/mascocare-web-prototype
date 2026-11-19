import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { apiUrls } from '../../config/api-url';
import { AuthenticationRequest } from '../../models/authentication-request.model';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('stores credentials only after a successful login', () => {
    const credentials: AuthenticationRequest = {
      username: 'test-user',
      password: 'test-password',
    };

    expect(() => service.getAuthorizationHeader()).toThrowError(
      'Authentication is required to access this resource.'
    );

    service.basicLogin(credentials).subscribe();

    const request = httpTestingController.expectOne(apiUrls.login);
    expect(request.request.method).toBe('GET');
    expect(request.request.headers.get('Authorization')).toBe(
      `Basic ${btoa('test-user:test-password')}`
    );

    request.flush({
      statusCode: 200,
      date: '',
      message: '',
      redirectUrl: '/home',
    });

    expect(service.getAuthorizationHeader()).toBe(
      `Basic ${btoa('test-user:test-password')}`
    );
  });
});
