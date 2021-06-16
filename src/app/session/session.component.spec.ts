import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CounterServiceStub } from '../mocks';
import { CounterService } from '../services/counter.service';

import { SessionComponent } from './session.component';

describe('SessionComponent', () => {
  let component: SessionComponent;
  let fixture: ComponentFixture<SessionComponent>;
  let counterService: CounterService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{provide: CounterService, useClass: CounterServiceStub}]
    })
    .compileComponents();

    counterService = TestBed.inject(CounterService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format the date', () => {
    const date = new Date();
    const lastSessiondate = date.setDate(date.getDate() - 1);
    component.formatDate(new Date(lastSessiondate).toLocaleDateString());
    expect(component.date.days).toBe(1);
    expect(component.date.hours).toBeTruthy();
    expect(component.date.minutes).toBeTruthy();
    expect(component.date.seconds).toBeTruthy();

  });

  it('should logout', () => {
    component.logout();
    expect(counterService.isAuth).toBeFalse();
  });
});
