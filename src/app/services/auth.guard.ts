import {
  ActivatedRoute,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // ensures Angular can inject this guard
})
export class AuthGuard{
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRoute,
    state: RouterStateSnapshot
  ): Observable<boolean> | UrlTree | Promise<boolean> | boolean | UrlTree {
    if (this.authService.isLoggedInGuard) {
      return true;
    } else {
      this.router.navigate(['/login']);
      this.toastr.warning('You must be logged in to access this page.');
      return false;
    } }
}
