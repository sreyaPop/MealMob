import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, ForgotComponent, RegisterComponent],
  imports: [CommonModule, AuthenticationRoutingModule,RouterOutlet,FormsModule],
})
export class AuthenticationModule {}
