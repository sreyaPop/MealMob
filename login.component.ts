import { Router, RouterOutlet, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent  {

  UserId: string = '';
  Pswd: string = '';
  validUserId: string = 'admin';
  validPswd: string = 'admin';
  constructor(private router: Router) {}

  onLogin(): void {
    if (this.UserId === this.validUserId && this.Pswd === this.validPswd) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid User ID or Password.');
    }
  }

}
