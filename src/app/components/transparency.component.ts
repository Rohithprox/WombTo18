import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-transparency',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-20 bg-teal-900 text-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
          <span class="text-yellow-400 font-bold uppercase tracking-wider">Transparency</span>
          <h2 class="text-3xl font-bold mt-2">Where Every Rupee Goes</h2>
          <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
            We believe in complete openness. Track how your donations are utilized in real-time.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Stats Visualization (Pie Chart Representation) -->
          <div class="flex justify-center">
            <div class="relative w-64 h-64 rounded-full bg-teal-800 flex items-center justify-center shadow-2xl"
                 style="background: conic-gradient(#F59E0B 0% 75%, #10B981 75% 100%);">
                 <!-- Inner Circle -->
                 <div class="absolute w-48 h-48 bg-teal-900 rounded-full flex flex-col items-center justify-center">
                   <span class="text-3xl font-bold text-white">75%</span>
                   <span class="text-sm text-gray-400">Utilized</span>
                 </div>
            </div>
          </div>

          <!-- detailed breakdown -->
          <div class="space-y-6">
            <div class="bg-teal-800 p-6 rounded-lg shadow-lg">
              <div class="flex justify-between items-end mb-2">
                <span class="text-gray-300 text-sm">Total Funds Received</span>
                <span class="text-2xl font-bold text-white">₹10,00,000</span>
              </div>
              <div class="w-full bg-teal-900 h-2 rounded-full">
                <div class="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>

            <div class="bg-teal-800 p-6 rounded-lg shadow-lg">
               <div class="flex justify-between items-end mb-2">
                <span class="text-gray-300 text-sm">Funds Utilized</span>
                <span class="text-2xl font-bold text-yellow-400">₹7,50,000</span>
              </div>
               <div class="w-full bg-teal-900 h-2 rounded-full">
                <div class="bg-yellow-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>

            <div class="bg-teal-800 p-6 rounded-lg shadow-lg border border-teal-700">
               <div class="flex justify-between items-end mb-2">
                <span class="text-gray-300 text-sm">Remaining Balance</span>
                <span class="text-2xl font-bold text-teal-300">₹2,50,000</span>
              </div>
               <div class="w-full bg-teal-900 h-2 rounded-full">
                <div class="bg-teal-400 h-2 rounded-full w-1/4"></div>
              </div>
            </div>
            
            <p class="text-xs text-center text-gray-400 mt-4">
              * Updated daily at 12:00 PM IST based on bank records.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TransparencyComponent { }
