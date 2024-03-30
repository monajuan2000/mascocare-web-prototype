export interface HttpErrorRequest {
  name: string;
  message: string;
  status?: number;
  statusText?: string;
  url?: string;
  headers?: Headers;
  error?: any;
  ok?: boolean;
  type?: string;
  total?: number;
}
