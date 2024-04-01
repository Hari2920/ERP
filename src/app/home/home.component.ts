import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  details = JSON.parse(localStorage.getItem('loginInfo') || '{}');
  isHr = this.details.role.endsWith('HR');
  isAcc = this.details.role.endsWith('ACC');
  isSs = this.details.role.endsWith('SS');

  logout() {
    this.router.navigateByUrl('login');
  }
}
