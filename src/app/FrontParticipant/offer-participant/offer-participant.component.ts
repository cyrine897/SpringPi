import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Services/offer.service';
import { Offer } from '../../models/offer';

@Component({
  selector: 'app-offer-participant',
  templateUrl: './offer-participant.component.html',
  styleUrls: ['./offer-participant.component.css']
})
export class OfferParticipantComponent implements OnInit {
  listOffer: Offer[] = [];
  displayedOffers: Offer[] = [];
  itemsPerPage = 9;
  currentPage = 1;
  searchDomain: string = '';
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.getAllOffers();
  }

  getAllOffers() {
    this.offerService.getAllOffers().subscribe(
      (res: Offer[]) => {
        this.listOffer = res;
        this.updateDisplayedOffers();
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
  }

  updateDisplayedOffers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedOffers = this.listOffer.slice(startIndex, endIndex);
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.updateDisplayedOffers();
  }
  onSearch(): void {
    this.currentPage = 1; // Réinitialiser la page actuelle lors de la recherche
  
    if (this.searchDomain.trim() !== '') {
      this.offerService.getOfferByDomain(this.searchDomain).subscribe(
        (res: Offer[]) => {
          this.listOffer = res;
          this.updateDisplayedOffers();
        },
        (error) => {
          console.error('Error fetching offers:', error);
        }
      );
    } else {
      this.getAllOffers(); // Charger à nouveau toutes les offres
    }
  }
  

}