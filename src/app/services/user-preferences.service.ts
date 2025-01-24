import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(true);
  private isSidebarCollapsedSubject = new BehaviorSubject<boolean>(false);

  isDarkMode$ = this.isDarkModeSubject.asObservable();
  isSidebarCollapsed$ = this.isSidebarCollapsedSubject.asObservable();

  constructor() {
    this.initializePreferences();
  }

  private initializePreferences() {

    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : true;
    this.setTheme(isDark);

    const sidebarState = localStorage.getItem('sidebarCollapsed');
    const isCollapsed = sidebarState ? sidebarState === 'true' : false;
    this.setSidebarState(isCollapsed);
  }

  toggleTheme() {
    const newIsDark = !this.isDarkModeSubject.value;
    this.setTheme(newIsDark);
  }

  private setTheme(isDark: boolean) {
    this.isDarkModeSubject.next(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  setSidebarState(isCollapsed: boolean) {
    this.isSidebarCollapsedSubject.next(isCollapsed);
    localStorage.setItem('sidebarCollapsed', isCollapsed.toString());
  }
} 