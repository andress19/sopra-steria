import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;
  public message = '';
  public form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public get username(): AbstractControl | null {
    return this.form.get('username');
  }

  public get password(): AbstractControl | null {
    return this.form.get('password');
  }

  constructor(private counterService: CounterService, private router: Router) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.message = '';
    const userName = this.username?.value;
    const password = this.password?.value;
    this.subscription = this.counterService.login(userName, password)
      .subscribe(
        data => this.router.navigate(['session'], { queryParams: { date: data.date } }),
        err => {
          console.error(err);
          this.message = 'User not found. Try again';
        });
  }
}
