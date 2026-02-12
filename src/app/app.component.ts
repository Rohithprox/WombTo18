import { Component } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ServicesComponent } from './components/services.component';
import { TransparencyComponent } from './components/transparency.component';
import { DonationFormComponent } from './components/donation-form.component';
import { DonorWallComponent } from './components/donor-wall.component';
import { ImpactReportsComponent } from './components/impact-reports.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TransparencyComponent,
    DonationFormComponent,
    DonorWallComponent,
    ImpactReportsComponent,
    FooterComponent
  ],
  template: `
    <main class="min-h-screen bg-gray-50 font-sans text-gray-900">
       <app-hero></app-hero>
       <app-about></app-about>
       <app-services></app-services>
       <app-transparency></app-transparency>
       <app-donation-form></app-donation-form>
       <app-donor-wall></app-donor-wall>
       <app-impact-reports></app-impact-reports>
       <app-footer></app-footer>
    </main>
  `
})
export class AppComponent { }
