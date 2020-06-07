import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export class AuthGuard implements CanActivate {
    user;
    constructor(private authService: AuthService, private router: Router) { }
    canActivate() {
        this.authService.user$.subscribe(u => {
            this.user = u;
        })
        if (this.user) {
            return true;
        }
        this.router.navigate(['/login']);
    }
}