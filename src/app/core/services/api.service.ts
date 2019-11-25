import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  get(url: string, params: any = {}, useRawParams: boolean = false): Observable<any> {

    if (!useRawParams) {
      let httpParams: HttpParams = new HttpParams();
      Object.keys(params).forEach( key => {
      httpParams = httpParams.append(key, params[key]); });

      params = httpParams;
    }

    return this.http.get(url, {params, headers: this.headers} );
  }
  post(url: string, payload) {
    return this.http.post(url, payload);
  }
}
