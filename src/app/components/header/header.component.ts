import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-md">
      <div class="flex items-center justify-between h-16 px-4">
        <div class="flex items-center space-x-4">
          <select class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md">
            <option>Selecionar Unidade</option>
          </select>
        </div>
        
        <div class="flex items-center space-x-4">
          <button (click)="toggleTheme()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          
          <img src="https://www.countryflags.io/br/flat/32.png" alt="BR" class="w-8 h-8" />
          
          <div class="flex items-center space-x-2">
            <span class="text-sm">Sessão expira em: 300</span>
            <span class="text-sm">Avaré - SP</span>
          </div>
          
          <div class="relative">
            <button class="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                7
              </span>
            </button>
          </div>
          
          <div class="flex items-center space-x-2">
            <img src="https://ui-avatars.com/api/?name=Renan" alt="User" class="w-8 h-8 rounded-full" />
            <span>Renan</span>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }
}