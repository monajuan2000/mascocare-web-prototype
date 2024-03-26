export class BaseRequest {
  constructor(
    public statusCode: number,
    public date: string,
    public message: string,
    public redirectUrl: string
  ) {}
}

export class ErrorRequest extends BaseRequest {
  constructor(
    public override statusCode: number,
    public override date: string,
    public override message: string,
    public override redirectUrl: string,
    public requestPath: string,
    public stackTrace: string
  ) {
    super(statusCode, date, message, redirectUrl);
  }
}

export class AuthenticationRequest {
  constructor(public username: String, public password: String) {}
}
