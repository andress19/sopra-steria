import { Observable, of } from 'rxjs';

export class CounterServiceStub {

  public login(url: string): Observable<any> {
    return of({});
  }
}
