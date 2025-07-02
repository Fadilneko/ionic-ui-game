import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';



import {
  homeOutline,
  flashOutline,
  atOutline,
  lockClosedOutline,
  notifications,
  listOutline,
  fitnessOutline,
  trophyOutline,
  personCircleOutline,
  timerOutline,
  lockOpenOutline,
  arrowForwardCircleOutline,
  medalOutline,
  walkOutline,
  musicalNoteOutline,
  sparklesOutline,
  flameOutline


} from 'ionicons/icons';



@Component({
  selector: 'app-home',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

 showLanguageList = false;

  toggleLanguageList() {
    this.showLanguageList = !this.showLanguageList;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isInside = target.closest('.stat-item, .language-tabs');
    if (!isInside) {
      this.showLanguageList = false;
    }
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
 
   constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLanguageList = false;
      }
    });
   
     addIcons({
//   'notifications-outline': notifications,
//   'list-outline': listOutline,
//   'fitness-outline': fitnessOutline,
//   'trophy-outline': trophyOutline,
//   'person-circle-outline': personCircleOutline,
//   'time-outline': timerOutline,
//   'home-outline': homeOutline,
//   'flash-outline': flashOutline,
//   'target-outline': atOutline,
//   'lock-closed-outline': lockClosedOutline,
//   'lock-open-outline': lockOpenOutline,
//   'arrow-forward-circle-outline': arrowForwardCircleOutline,
//   'medal-outline': medalOutline,
//   'walk-outline': walkOutline,
//   'musical-notes-outline': musicalNoteOutline,
//   'sparkles-outline': sparklesOutline,
     'flame-outline': flameOutline,

    });



  }

 


  
}
