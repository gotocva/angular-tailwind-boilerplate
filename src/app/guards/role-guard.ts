
import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Injectable()
export class RoleGuard implements CanActivate {
    
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');
    // TODO check the role of logged in user with current route
    if (
      !this.auth.isAuthenticated() || 
      'role_from_token_on_localstorage' !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}