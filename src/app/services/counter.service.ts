import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Base from '../Base';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService extends Base{
  private _isAuth: boolean;
  public get isAuth(): boolean {
    return this._isAuth;
  }
  public set isAuth(value: boolean) {
    this._isAuth = value;
  }

  private _date: string;
  public get date(): string {
    return this._date;
  }
  public set date(value: string) {
    this._date = value;
  }

  constructor(private http: HttpClient) {
    super();
    this._date = '';
    this._isAuth = false;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}user/${username}/${password}`);
  }
  
}
