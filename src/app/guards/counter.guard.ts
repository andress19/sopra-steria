import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CounterService } from '../services/counter.service';

@Injectable({
  providedIn: 'root'
})
export class CounterGuard implements CanActivate {
  constructor(private counterService: CounterService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.counterService.isAuth) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  
}
