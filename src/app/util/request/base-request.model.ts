export class BaseRequest {
  constructor(
    public statusCode: number,
    public date: string,
    public message: string,
    public redirectUrl: string
  ) {}
}

export class AuthenticationRequest {
  constructor(public username: String, public password: String) {}
}
