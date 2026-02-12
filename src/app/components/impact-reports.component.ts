import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-impact-reports',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-20 bg-teal-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-bold uppercase tracking-wider">Your Impact</span>
          <h2 class="text-3xl font-bold text-gray-800 mt-2">See The Change You Create</h2>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            We believe in long-term relationships. Donors receive weekly progress updates until the program goal is met.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <!-- Weekly Progress Report Mockup -->
          <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
            <div class="absolute -top-4 -left-4 bg-yellow-500 text-teal-900 font-bold py-1 px-4 rounded-full text-sm shadow-md">
              Weekly Donor Update
            </div>
            
            <div class="flex items-center space-x-4 mb-6 border-b border-gray-100 pb-4">
               <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                 <span class="material-icons">mail</span>
               </div>
               <div>
                 <h4 class="font-bold text-gray-800">Week 4: Nutrition Program Update</h4>
                 <p class="text-xs text-gray-500">Sent to donors on Feb 12, 2026</p>
               </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <span class="text-xs font-bold text-gray-500 uppercase">Impact Snippet</span>
                <p class="text-gray-700 text-sm mt-1 font-medium">
                  "Thanks to your support, 45 expectant mothers in Adilabad received their monthly protein kits this week."
                </p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <span class="text-xs font-bold text-gray-500 uppercase">Fund Utilization</span>
                <div class="flex justify-between items-center mt-2">
                  <span class="text-sm text-gray-700">Allocated this week:</span>
                  <span class="font-bold text-teal-600">₹45,000</span>
                </div>
                <div class="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                  <div class="bg-teal-500 h-1.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Blog & Press Previews -->
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Latest Stories & News</h3>

            <!-- Card 1 -->
            <div class="flex bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer">
              <div class="w-1/3 bg-gray-200 relative">
                 <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center p-2">
                   [Image: Nutrition Drive]
                 </div>
              </div>
              <div class="w-2/3 p-4">
                <span class="text-teal-600 text-xs font-bold uppercase">Blog</span>
                <h4 class="font-bold text-gray-800 text-sm group-hover:text-teal-700 transition">Understanding Prenatal Care in Rural India</h4>
                <p class="text-xs text-gray-500 mt-1">Feb 10, 2026 • 5 min read</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="flex bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer">
              <div class="w-1/3 bg-gray-200 relative">
                 <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center p-2">
                   [Image: Press Meet]
                 </div>
              </div>
              <div class="w-2/3 p-4">
                <span class="text-blue-600 text-xs font-bold uppercase">Press Coverage</span>
                <h4 class="font-bold text-gray-800 text-sm group-hover:text-blue-700 transition">The Hindu Features WombTo18 Initiative</h4>
                <p class="text-xs text-gray-500 mt-1">Jan 28, 2026 • The Hindu</p>
              </div>
            </div>

             <!-- Card 3 -->
            <div class="flex bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer">
              <div class="w-1/3 bg-teal-600 flex items-center justify-center text-white">
                 <span class="material-icons">description</span>
              </div>
              <div class="w-2/3 p-4">
                <span class="text-purple-600 text-xs font-bold uppercase">Impact Report</span>
                <h4 class="font-bold text-gray-800 text-sm group-hover:text-purple-700 transition">Annual Impact Report 2025 (PDF)</h4>
                <span class="text-xs text-teal-600 font-semibold mt-1 inline-block">Download Now ↓</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
})
export class ImpactReportsComponent { }
