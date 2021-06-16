import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Base from '../Base';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService extends Base{

  constructor(private http: HttpClient) {
    super();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}user/${username}/${password}`);
  }
}
