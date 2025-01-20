import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="fixed flex flex-col top-0 left-0 w-16 hover:w-64 md:w-64 h-full bg-white dark:bg-gray-800 transition-all duration-300 border-r z-30">
      <div class="flex items-center justify-start md:justify-center pl-3 md:pl-0 h-14 border-b">
        <img src="assets/logo.png" alt="Logo" class="w-8 h-8" />
        <span class="hidden md:block ml-2 text-lg font-semibold">Dashboard</span>
      </div>
      
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
          <li class="px-3">
            <a routerLink="/" class="sidebar-icon group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span class="sidebar-tooltip group-hover:scale-100">
                Dashboard
              </span>
            </a>
          </li>
          <li class="px-3">
            <a routerLink="/units" class="sidebar-icon group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
              <span class="sidebar-tooltip group-hover:scale-100">
                Unidades
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class SidebarComponent {}