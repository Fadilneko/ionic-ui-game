import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';

import {
  flashOutline,
  notifications,
  listOutline,
  fitnessOutline,
  trophyOutline,
  personCircleOutline,
  timerOutline,
  homeOutline,
  atOutline,
  lockClosedOutline,
  lockOpenOutline,
  arrowForwardCircleOutline,
  medalOutline,
  walkOutline,
  musicalNoteOutline,
  sparklesOutline,
  flameOutline,
  starOutline,
  barbellOutline,
  bookOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  showLanguageList = false;
  showUnitCard = false;
  activeNodeIndex: number | null = null;
  filledStars = 0; 
  starColors = ['#ffc107', '#42a5f5', '#ec407a'];

  constructor(private router: Router) {

    addIcons({
      'flash-outline': flashOutline,
      'notifications-outline': notifications,
      'list-outline': listOutline,
      'fitness-outline': fitnessOutline,
      'trophy-outline': trophyOutline,
      'person-circle-outline': personCircleOutline,
      'time-outline': timerOutline,
      'home-outline': homeOutline,
      'target-outline': atOutline,
      'lock-closed-outline': lockClosedOutline,
      'lock-open-outline': lockOpenOutline,
      'arrow-forward-circle-outline': arrowForwardCircleOutline,
      'medal-outline': medalOutline,
      'walk-outline': walkOutline,
      'musical-notes-outline': musicalNoteOutline,
      'sparkles-outline': sparklesOutline,
      'flame-outline': flameOutline,
      'star-outline': starOutline,
      'barbel-outline': barbellOutline,
      'book-outline': bookOutline,
    });


    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.showLanguageList = false;
        this.showUnitCard = false;
        this.activeNodeIndex = null;
      }
    });
  }

  toggleLanguageList() {
    this.showLanguageList = !this.showLanguageList;
  }

  onContinue() {
    this.showUnitCard = true;
  }

  selectNode(i: number) {
    this.activeNodeIndex = i;
  }

  goToStreak() {
    this.router.navigate(['/streak']);
  }

  goToShop() {
    this.router.navigate(['/shop']);
  }

  goToSuper() {
    this.router.navigate(['/super']);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

   
    if (!target.closest('.stat-item, .language-tabs')) {
      this.showLanguageList = false;
    }

   
    if (!target.closest('.level-node.pink')) {
      this.showUnitCard = false;
    }

    if (!target.closest('.level-node, .level-img, .avatar-block')) {
      this.activeNodeIndex = null;
    }
  }
}
