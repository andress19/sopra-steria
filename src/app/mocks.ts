import { Observable, of } from 'rxjs';

export class CounterServiceStub {

  public login(url: string): Observable<any> {
    return of({date: '01-01-1901'});
  }
}
