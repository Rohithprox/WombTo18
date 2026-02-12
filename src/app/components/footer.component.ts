import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 class="text-white font-bold text-lg mb-4">Womb to 18</h3>
          <p class="text-sm leading-relaxed">
            Empowering the next generation through holistic care and support.
          </p>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-teal-400">About Us</a></li>
            <li><a href="#" class="hover:text-teal-400">Our Programs</a></li>
            <li><a href="#" class="hover:text-teal-400">Financial Reports</a></li>
            <li><a href="#" class="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-4">Contact</h4>
          <ul class="space-y-2 text-sm">
            <li>+91 98765 43210</li>
            <li>hello@wombto18.org</li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-4">Certifications</h4>
          <div class="flex space-x-4">
             <!-- Certification Placeholders -->
             <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-teal-900 border border-teal-700 rounded flex items-center justify-center text-teal-400 font-bold mb-1">80G</div>
                <span class="text-[10px] text-gray-500">Tax Exempt</span>
             </div>
             <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-blue-900 border border-blue-700 rounded flex items-center justify-center text-blue-400 font-bold mb-1">12A</div>
                <span class="text-[10px] text-gray-500">Registered</span>
             </div>
             <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-yellow-900 border border-yellow-700 rounded flex items-center justify-center text-yellow-400 font-bold mb-1">CSR</div>
                <span class="text-[10px] text-gray-500">Compliant</span>
             </div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
        &copy; 2026 Womb to 18 Foundation. All Rights Reserved.
      </div>
    </footer>
  `
})
export class FooterComponent { }
