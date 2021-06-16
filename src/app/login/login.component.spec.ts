import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CounterServiceStub } from '../mocks';
import { CounterService } from '../services/counter.service';
import { SessionComponent } from '../session/session.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let counterService: CounterService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(
        [{path: 'session', component: SessionComponent}]
      )],
      providers: [{provide: CounterService, useClass: CounterServiceStub}]
    })
    .compileComponents();

    counterService = TestBed.inject(CounterService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should login and set the date', () => {
    component.onSubmit();
    expect(counterService.date).toBe('01-01-1901');
    expect(counterService.isAuth).toBeTrue();
  });
});
