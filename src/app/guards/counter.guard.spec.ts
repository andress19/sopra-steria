import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CounterServiceStub } from '../mocks';
import { CounterService } from '../services/counter.service';

import { CounterGuard } from './counter.guard';

describe('CounterGuard', () => {
  let guard: CounterGuard;
  let counterService: CounterService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{provide: CounterService, useClass: CounterServiceStub}]

    });
    guard = TestBed.inject(CounterGuard);
    counterService = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not allow activate the page', () => {
    counterService.isAuth = false;
    let result = guard.canActivate();
    expect(result).toBeFalse();
  });

  it('should not allow activate the page', () => {
    counterService.isAuth = true;
    let result = guard.canActivate();
    expect(result).toBeTrue();
  });
});
