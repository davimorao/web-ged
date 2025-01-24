import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserPreferencesService } from '../../services/user-preferences.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;
  isDarkMode = true;
  @Output() collapse = new EventEmitter<boolean>();

  constructor(private userPreferences: UserPreferencesService) {
    this.userPreferences.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
    this.userPreferences.isSidebarCollapsed$.subscribe(
      isCollapsed => {
        this.isCollapsed = isCollapsed;
        this.collapse.emit(isCollapsed);
      }
    );
  }

  get logoPath(): string {
    if (this.isDarkMode) {
      return this.isCollapsed ? '/assets/logo/logo-collapsed-dark.png' : '/assets/logo/logo-transparent-dark.png';
    } else {
      return this.isCollapsed ? '/assets/logo/logo-collapsed-light.png' : '/assets/logo/logo-transparent-light.png';
    }
  }

  toggleSidebar() {
    this.userPreferences.setSidebarState(!this.isCollapsed);
  }

  toggleTheme() {
    this.userPreferences.toggleTheme();
  }
}
