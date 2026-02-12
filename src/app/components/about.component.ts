import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-teal-600 font-bold uppercase tracking-wider mb-2 block">About Us</span>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              We are dedicated to providing holistic support to children from prenatal stages through adolescence. 
              Our "Womb to 18" initiative ensures that every child receives the nutrition, healthcare, and education 
              they need to thrive.
            </p>
            <div class="flex space-x-8">
              <div>
                <span class="block text-4xl font-bold text-teal-600">12+</span>
                <span class="text-sm text-gray-500">Years of Service</span>
              </div>
              <div>
                <span class="block text-4xl font-bold text-teal-600">5k+</span>
                <span class="text-sm text-gray-500">Lives Impacted</span>
              </div>
              <div>
                <span class="block text-4xl font-bold text-teal-600">50+</span>
                <span class="text-sm text-gray-500">Communities</span>
              </div>
            </div>
            <a href="#" class="inline-block mt-8 text-teal-700 font-semibold hover:text-teal-900">
              Read More &rarr;
            </a>
          </div>
          <div class="relative h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
             <!-- Placeholder for Image -->
             <div class="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-100">
                [About Image Placeholder]
             </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent { }
