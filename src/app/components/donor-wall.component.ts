import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-donor-wall',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Our Generous Supporters</h2>
          <p class="text-gray-500 mt-2">Thank you for being the change.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div *ngFor="let donor of donors()" class="bg-gray-50 border border-gray-100 p-6 rounded-xl flex items-center space-x-4 shadow-sm hover:shadow-md transition">
            <!-- Avatar -->
            <div [ngClass]="{'bg-teal-100 text-teal-600': !donor.isAnonymous, 'bg-gray-200 text-gray-500': donor.isAnonymous}" class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
              <span *ngIf="!donor.isAnonymous">{{ donor.name.charAt(0) }}</span>
              <span *ngIf="donor.isAnonymous" class="material-icons">?</span>
            </div>
            
            <!-- Details -->
            <div>
              <h4 class="font-bold text-gray-800">{{ donor.name }}</h4>
              <p class="text-teal-600 font-semibold text-sm">₹{{ donor.amount | number }}</p>
              <p class="text-xs text-gray-400 mt-1">{{ donor.time }}</p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-10">
          <button class="text-teal-600 font-semibold hover:underline">View All Donors</button>
        </div>
      </div>
    </section>
  `
})
export class DonorWallComponent {
  private donationService = inject(DonationService);
  donors = this.donationService.getDonors;
}
