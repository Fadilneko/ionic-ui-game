import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
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
  flameOutline,
  closeOutline,
  shareOutline,
  sunnyOutline,
  snowOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  chevronForwardOutline,



} from 'ionicons/icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShopPage implements OnInit {

   gems = 287;

  myItems = [
    { icon: 'assets/freeze.png', label: 'Streak Freeze', count: 2 },
    { icon: 'assets/potion.png',     label: 'XP Boost',      count: 0 },
    { icon: 'assets/timer.png',  label: 'Timer Boost',   count: 0 }
  ];

  offers = [
    {
      expires: '4D',
      icon: 'assets/potion.png',
      title: 'Friends Quest Boost'
    }
  ];

  constructor(private router: Router) { 
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
     'close-outline': closeOutline,
     'share-outline': shareOutline,
     'sunny-outline': sunnyOutline,
     'snow-outline': snowOutline,
     'checkmark-circle-outline': checkmarkCircleOutline,
     'chevron-back-outline': chevronBackOutline,
     'chevron-forward-outline': chevronForwardOutline

    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goToSuper() {
  this.router.navigate(['/super']);
}

  claim(offer: any) {
   
    console.log('Claiming', offer);
  }

  ngOnInit() {
  }

}
