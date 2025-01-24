import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPreferencesService } from '../../services/user-preferences.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;
  isDarkMode: boolean = true;

  constructor(
    private router: Router,
    private userPreferences: UserPreferencesService
  ) {
    this.userPreferences.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  onSubmit() {
    // Here you would typically implement actual authentication
    // For now, we'll just redirect to dashboard
    this.router.navigate(['/dashboard']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get logoPath(): string {
    return this.isDarkMode 
      ? '/assets/logo/logo-transparent-dark.png'
      : '/assets/logo/logo-transparent-light.png';
  }
}