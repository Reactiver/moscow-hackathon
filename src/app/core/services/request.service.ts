import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface HTTPOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private readonly endpoint = environment.api.endpoint;
  private readonly httpOptions = {
    headers: new HttpHeaders(),
  };

  constructor(private http: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.endpoint}/${url}`);
  }

  public post<T>(url: string, body: any | null, options?: HTTPOptions): Observable<T> {
    return this.http.post<T>(`${this.endpoint}/${url}`, body, options);
  }

  public put<T>(url: string, body: any | null, options?: HTTPOptions): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${url}`, body, options);
  }

  public delete<T>(url: string, options?: HTTPOptions): Observable<T> {
    return this.http.delete<T>(`${this.endpoint}/${url}`, options);
  }

  public patch<T>(url: string, body: any | null, options?: HTTPOptions): Observable<T> {
    return this.http.patch<T>(`${this.endpoint}/${url}`, body, options);
  }
}
