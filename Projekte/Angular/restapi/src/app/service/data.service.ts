import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../app.constants';

@Injectable()
export class DataService {

  private actionUrl: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl;
  }

  public getAll<T>(objectUrl: string): Observable<T> {
    return this.http.get<T>(this.actionUrl + objectUrl);
  }

  public getSingle<T>(id: number, objectUrl: string): Observable<T> {
    return this.http.get<T>(this.actionUrl + objectUrl + id);
  }

  public add<T>(object: any, objectUrl: string): Observable<T> {
    const toAdd = JSON.stringify(object);
    this.http.post<T>(this.actionUrl + objectUrl, toAdd,
      { headers: { 'Content-Type': 'application/json' } }).subscribe();
    return this.http.post<T>(this.actionUrl + objectUrl, toAdd,
      { headers: { 'Content-Type': 'application/json' } });
  }

  public update<T>(id: number, itemToUpdate: any, objectUrl: string): Observable<T> {
    this.http
      .put<T>(this.actionUrl + objectUrl + id, JSON.stringify(itemToUpdate),
        { headers: { 'Content-Type': 'application/json' } }).subscribe();
    return this.http
      .put<T>(this.actionUrl + objectUrl + id, JSON.stringify(itemToUpdate),
        { headers: { 'Content-Type': 'application/json' } });
  }

  public delete<T>(id: number, objectUrl: string): Observable<T> {
    this.http.delete<T>(this.actionUrl + objectUrl + id).subscribe();
    return this.http.delete<T>(this.actionUrl + objectUrl + id);
  }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
  }
}
