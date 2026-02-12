import { Injectable, signal, computed } from '@angular/core';

export interface Donor {
    name: string;
    amount: number;
    time: string;
    isAnonymous: boolean;
    systemId?: string;
}

@Injectable({
    providedIn: 'root'
})
export class DonationService {
    private donors = signal<Donor[]>([
        { name: 'Rohith Y.', amount: 5000, time: '2 mins ago', isAnonymous: false },
        { name: 'WTB-DN-2026-0045', amount: 2000, time: '10 mins ago', isAnonymous: true, systemId: 'WTB-DN-2026-0045' },
        { name: 'Ananya S.', amount: 10000, time: '1 hour ago', isAnonymous: false },
        { name: 'John D.', amount: 1500, time: '3 hours ago', isAnonymous: false },
        { name: 'WTB-DN-2026-0032', amount: 500, time: '5 hours ago', isAnonymous: true, systemId: 'WTB-DN-2026-0032' }
    ]);

    getDonors = computed(() => this.donors());

    addDonor(donor: { name: string, amount: number, isAnonymous: boolean }) {
        const newDonor: Donor = {
            name: donor.isAnonymous ? this.generateSystemId() : donor.name,
            amount: donor.amount,
            time: 'Just now',
            isAnonymous: donor.isAnonymous,
            systemId: donor.isAnonymous ? this.generateSystemId() : undefined
        };

        // Add new donor to the beginning of the list
        this.donors.update(currentDonors => [newDonor, ...currentDonors]);
    }

    private generateSystemId(): string {
        return 'WTB-DN-2026-' + Math.floor(1000 + Math.random() * 9000);
    }
}
