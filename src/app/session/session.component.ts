import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;
  public date = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  lastSession = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => this.lastSession = data.date);
    this.subscription = interval(1000)
    .subscribe(x => { this.formatDate(this.lastSession); });
  }

  formatDate(date: string): void {
    const currentDate = new Date();
    const lastSession = new Date(date);
    this.date.days = parseInt(((currentDate.getTime() - lastSession.getTime()) / (1000 * 60 * 60 * 24)).toString(), 10);
    this.date.hours = parseInt((Math.abs(currentDate.getTime() - lastSession.getTime()) / (1000 * 60 * 60) % 24).toString(), 10);
    this.date.minutes = parseInt((Math.abs(currentDate.getTime() - lastSession.getTime()) / (1000 * 60) % 60).toString(), 10);
    this.date.seconds = parseInt((Math.abs(currentDate.getTime() - lastSession.getTime()) / (1000) % 60).toString(), 10);
  }

  logout(): void {
    this.router.navigate(['']);
  }

}
