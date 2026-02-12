import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-donation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="donation-form" class="py-20 bg-gray-50 flex flex-col items-center">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="bg-teal-600 p-6 text-center text-white">
            <h2 class="text-2xl font-bold">Make an Impact Today</h2>
            <p class="text-teal-100">Your contribution directly supports our programs.</p>
          </div>
          
          <div class="p-8 md:p-12">
            <form class="space-y-6" (ngSubmit)="processDonation()">
              <!-- Amount Selection -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <button type="button" class="py-3 px-4 border-2 border-teal-500 text-teal-700 font-bold rounded-lg hover:bg-teal-50 focus:bg-teal-600 focus:text-white transition">₹500</button>
                <button type="button" class="py-3 px-4 border-2 border-teal-500 bg-teal-600 text-white font-bold rounded-lg shadow-md">₹2,000</button>
                <button type="button" class="py-3 px-4 border-2 border-teal-500 text-teal-700 font-bold rounded-lg hover:bg-teal-50 focus:bg-teal-600 focus:text-white transition">₹5,000</button>
                <input type="number" placeholder="Custom" class="py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none" [(ngModel)]="donationAmount" name="amount" />
              </div>

              <!-- Personal Details -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" [(ngModel)]="donorName" name="fullName" required />
                </div>
                <div>
                   <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" [(ngModel)]="donorEmail" name="email" required />
                </div>
              </div>

               <!-- Additional Contact Details -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" [(ngModel)]="donorPhone" name="phone" required />
                </div>
                <div>
                   <label class="block text-sm font-semibold text-gray-700 mb-2">Address (for 80G Receipt)</label>
                  <input type="text" placeholder="House No, Street, City" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" [(ngModel)]="donorAddress" name="address" required />
                </div>
              </div>
              
              <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Select Program</label>
                  <select class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-white" [(ngModel)]="selectedProgram" name="program">
                    <option>Where it's needed most</option>
                    <option>Nutrition Program</option>
                    <option>Education Support</option>
                    <option>Healthcare Camps</option>
                  </select>
              </div>

              <!-- Consent Toggle -->
              <div class="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div class="flex items-center h-5">
                   <input id="consent" type="checkbox" [(ngModel)]="isPublic" name="consent" class="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="consent" class="font-medium text-gray-800">Display my name publicly on the Donor Wall</label>
                  <p class="text-gray-500 mt-1">If unchecked, your donation will be listed as "Anonymous" or with a System ID.</p>
                </div>
              </div>

              <!-- Submit -->
              <button type="submit" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Proceed to Pay
              </button>
              
              <!-- Signals -->
              <!-- Compliance & Certificate Preview -->
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-6 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                   <div class="bg-white p-2 rounded shadow-sm">
                      <span class="material-icons text-teal-600 text-2xl">verified_user</span>
                   </div>
                   <div>
                     <p class="text-sm font-bold text-gray-800">100% Tax Exemption</p>
                     <p class="text-xs text-gray-500">Eligible for 80G & 12A Benefits</p>
                   </div>
                </div>
                
                 <!-- Certificate Mock -->
                <div class="hidden md:flex items-center space-x-2 bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">
                   <span class="material-icons text-yellow-500 text-sm">workspace_premium</span>
                   <span class="text-xs font-semibold text-gray-600">Instant Certificate</span>
                </div>
              </div>

               <!-- Signals -->
              <div class="flex justify-center items-center space-x-4 text-xs text-gray-400 mt-4">
                <span class="flex items-center"><span class="mr-1">🔒</span> 256-bit SSL Secure</span>
                <span class="flex items-center">Verified by Razorpay</span>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DonationFormComponent {
  donationAmount: number | undefined;
  donorName: string = '';
  donorEmail: string = '';
  donorPhone: string = '';
  donorAddress: string = '';
  selectedProgram: string = "Where it's needed most";
  isPublic: boolean = true; // Default to public

  constructor(private donationService: DonationService) { }

  processDonation() {
    if (this.donorName && this.donorEmail && this.donorPhone && this.donorAddress) {

      // Add to donor wall
      this.donationService.addDonor({
        name: this.donorName,
        amount: this.donationAmount || 2000, // Default or custom
        isAnonymous: !this.isPublic
      });

      alert(`Thank you, ${this.donorName}! Your receipt is being downloaded.`);
      this.downloadDummyReceipt();

      // Reset form (optional)
      this.donorName = '';
      this.donorEmail = '';
      this.donorPhone = '';
      this.donorAddress = '';
      this.donationAmount = undefined;

    } else {
      alert('Please fill in all details including Phone and Address.');
    }
  }

  downloadDummyReceipt() {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXwKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSCfwKICAgID4+CiAgPj4KICAvQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCgo0IDAgb2JqCjw8CiAgL1R5cGUgL1ZvbnQKICAvU3VidHlwZSAvVHlwZTEKICAvQmFzZUZvbnQgL1RpbWVzLVJvbWFuCj4+CmVuZG9iagoKNSAwIG9iago8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNjAgMDAwMDAgbiAKMDAwMDAwMDE1NyAwMDAwMCBuIAowMDAwMDAwMjU1IDAwMDAwIG4gCjAwMDAwMDAzNDQgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDQzCiUlRU9GCg=='; // Empty PDF dummy
    link.download = 'WombTo18_Donation_Receipt.pdf';
    link.click();
  }
}
