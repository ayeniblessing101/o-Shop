import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  constructor(private authService: AuthService) {
    authService.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
