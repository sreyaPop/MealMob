import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from 'src/app/core/components/login/login.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule,IonicModule],
})
export class DashboardModule {}
