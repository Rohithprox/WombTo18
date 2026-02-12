import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative bg-teal-700 text-white h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background Overlay (Gradient) -->
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900 to-teal-700 opacity-90 z-0"></div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering Children From <br/>
          <span class="text-yellow-400">Womb To 18 Years</span>
        </h1>
        <p class="text-xl md:text-2xl mb-10 text-gray-200">
          Join us in transforming lives through nutrition, education, and healthcare programs.
        </p>
        <button (click)="scrollToDonation()" class="bg-yellow-500 hover:bg-yellow-400 text-teal-900 font-bold py-4 px-10 rounded-full text-lg transition transform hover:scale-105 shadow-lg">
          Donate Now
        </button>
        
        <!-- Trust Badges -->
        <div class="mt-8 flex justify-center items-center space-x-6 text-teal-100 text-sm font-semibold">
           <div class="flex items-center space-x-2 bg-teal-800 bg-opacity-40 px-3 py-2 rounded-lg backdrop-blur-sm">
             <span class="material-icons text-green-400 text-base">verified</span>
             <span>80G Tax Exemption</span>
           </div>
           <div class="flex items-center space-x-2 bg-teal-800 bg-opacity-40 px-3 py-2 rounded-lg backdrop-blur-sm">
             <span class="material-icons text-blue-400 text-base">lock</span>
             <span>Secure Payments</span>
           </div>
           <div class="flex items-center space-x-2 bg-teal-800 bg-opacity-40 px-3 py-2 rounded-lg backdrop-blur-sm">
             <span class="material-icons text-yellow-400 text-base">gavel</span>
             <span>NGO Compliance Verified</span>
           </div>
        </div>
      </div>
      
      <!-- Decorative Elements (Optional) -->
      <div class="absolute bottom-0 w-full h-24 bg-white clip-path-curve"></div>
    </section>
  `,
  styles: [`
    .clip-path-curve {
      clip-path: ellipse(60% 100% at 50% 100%);
    }
  `]
})
export class HeroComponent {
  scrollToDonation() {
    const element = document.getElementById('donation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
