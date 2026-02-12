import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-bold uppercase tracking-wider">Our Programs</span>
          <h2 class="text-3xl font-bold text-gray-800 mt-2">Making a Difference at Every Stage</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Program Card 1 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div class="h-48 bg-teal-100 relative">
               <div class="absolute inset-0 flex items-center justify-center text-teal-800 font-bold text-xl">
                 Nutrition Program
               </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Nutrition Support</h3>
              <p class="text-gray-600 mb-4 text-sm">Providing essential nutrient kits to expectant mothers and children.</p>
              
              <div class="mb-4">
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span>Raised: ₹2.5L</span>
                  <span>Goal: ₹5L</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-yellow-500 w-1/2"></div>
                </div>
              </div>
              
              <button (click)="scrollToDonation()" class="w-full py-2 border border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">
                Donate
              </button>
            </div>
          </div>

          <!-- Program Card 2 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
             <div class="h-48 bg-blue-100 relative">
               <div class="absolute inset-0 flex items-center justify-center text-blue-800 font-bold text-xl">
                 Education Support
               </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Education for All</h3>
              <p class="text-gray-600 mb-4 text-sm">Sponsoring school fees and supplies for underprivileged children.</p>
              
              <div class="mb-4">
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span>Raised: ₹1.2L</span>
                  <span>Goal: ₹2L</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500 w-3/5"></div>
                </div>
              </div>
              
              <button (click)="scrollToDonation()" class="w-full py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                Donate
              </button>
            </div>
          </div>

          <!-- Program Card 3 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
             <div class="h-48 bg-red-100 relative">
               <div class="absolute inset-0 flex items-center justify-center text-red-800 font-bold text-xl">
                 Healthcare Camps
               </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Medical Camps</h3>
              <p class="text-gray-600 mb-4 text-sm">Regular health checkups and vaccinations for remote villages.</p>
              
              <div class="mb-4">
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span>Raised: ₹80k</span>
                  <span>Goal: ₹1.5L</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-red-500 w-2/5"></div>
                </div>
              </div>
              
              <button (click)="scrollToDonation()" class="w-full py-2 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  scrollToDonation() {
    const element = document.getElementById('donation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
