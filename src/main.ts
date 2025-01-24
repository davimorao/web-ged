import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './app/components/sidebar/sidebar.component';
import { HeaderComponent } from './app/components/header/header.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { UnitsPageComponent } from './app/pages/units/units.component';
import { ClientsPageComponent } from './app/pages/clients/clients.component';
import { AppointmentsPageComponent } from './app/pages/appointments/appointments.component';
import { UsersPageComponent } from './app/pages/users/users.component';
import { LoginComponent } from './app/pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'units', component: UnitsPageComponent },
  { path: 'clients', component: ClientsPageComponent },
  { path: 'appointments', component: AppointmentsPageComponent },
  { path: 'users', component: UsersPageComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, SidebarComponent, HeaderComponent],
  template: `
    <router-outlet *ngIf="isLoginPage; else mainLayout"></router-outlet>
    <ng-template #mainLayout>
      <div class="app-container" [class.sidebar-collapsed]="sidebarCollapsed">
        <app-sidebar (collapse)="onSidebarCollapse($event)"></app-sidebar>
        <main>
          <app-header></app-header>
          <router-outlet></router-outlet>
        </main>
      </div>
    </ng-template>
  `,
  styles: [`
    .app-container {
      display: flex;
    }

    main {
      flex: 1;
      margin-left: 250px;
      transition: all 0.3s ease;
    }

    .sidebar-collapsed main {
      margin-left: 70px;
    }
  `]
})
export class App {
  sidebarCollapsed = false;

  get isLoginPage(): boolean {
    return window.location.pathname === '/login';
  }

  onSidebarCollapse(collapsed: boolean) {
    this.sidebarCollapsed = collapsed;
  }
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});