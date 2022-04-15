import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isVisible: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  randomCheck() {
    this.authService.randomCheck().subscribe((req) => {
      console.log('randomCheck', req);
    });
  }

  ngOnInit(): void {
    this.spinnerService.showSpinner();
    this.spinnerService.getSpinnerState$().subscribe((state: boolean) => {
      this.isVisible = state;
      console.log('this.isVisible', this.isVisible);
    });
  }
}
