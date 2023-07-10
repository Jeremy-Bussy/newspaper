import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // Check if the user is authenticated and has the required role (creator or admin)
    // Replace the condition with your own authentication and role check logic
    const isAuthenticated = true; // Replace with your authentication check
    const userRole = 'creator'; // Replace with your role check

    if (isAuthenticated && (userRole === 'creator' || userRole === 'admin')) {
      return true; // Allow access to the create page
    }

    // Redirect to the homepage or show an error message
    return this.router.parseUrl('/'); // Redirect to the homepage
  }
  
}
