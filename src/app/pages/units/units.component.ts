import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Unidades</h1>
        <div class="flex space-x-2">
          <button (click)="refresh()" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
            </svg>
          </button>
          <button (click)="openNewUnitModal()" class="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            Nova Unidade
          </button>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
        <table class="min-w-full">
          <thead>
            <tr class="border-b dark:border-gray-700">
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                <input type="checkbox" class="rounded">
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nome Fantasia</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Documento</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let unit of units" class="border-b dark:border-gray-700">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded">
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{unit.id}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{unit.name}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{unit.document}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button (click)="editUnit(unit)" class="text-blue-600 hover:text-blue-900 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button (click)="deleteUnit(unit)" class="text-red-600 hover:text-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div class="px-6 py-4 flex items-center justify-between">
          <div class="flex items-center">
            <span class="mr-2">Rows per page:</span>
            <select class="bg-gray-100 dark:bg-gray-700 rounded-md">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <div class="flex items-center space-x-2">
            <span>1-2 of 2</span>
            <button class="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div *ngIf="showModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        
        <div class="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full">
          <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 class="text-lg font-medium">Nova Unidade</h3>
            <button (click)="closeModal()" class="text-gray-400 hover:text-gray-500">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="p-4">
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Logo da Unidade</label>
              <div class="border-2 border-dashed rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p class="mt-1 text-sm text-gray-500">BMP, JPEG, PNG</p>
                <button class="mt-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md">Escolher arquivo</button>
              </div>
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Nome da Unidade</label>
              <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium mb-2">Tipo de Documento</label>
                <select class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                  <option>CNPJ</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Número do Documento</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
              </div>
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Telefone</label>
              <input type="tel" class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Email</label>
              <input type="email" class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
            </div>
          </div>
          
          <div class="flex justify-end space-x-2 p-4 border-t dark:border-gray-700">
            <button (click)="closeModal()" class="px-4 py-2 border rounded-md">Cancelar</button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-md">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class UnitsComponent {
  showModal = false;
  units = [
    { id: 1, name: 'Unidade Centro', document: '12345678000199' },
    { id: 2, name: 'Unidade Norte', document: '98765432000199' }
  ];

  refresh() {
    // Implement refresh logic
  }

  openNewUnitModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  editUnit(unit: any) {
    // Implement edit logic
  }

  deleteUnit(unit: any) {
    // Implement delete logic
  }
}