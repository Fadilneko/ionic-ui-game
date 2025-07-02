import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  personAddOutline,
  shareSocialOutline,
  shareOutline


} from 'ionicons/icons';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StatisticPage implements OnInit {

  friendStreaks = [
  { avatar: 'assets/org1.png', streak: 89 },
  { avatar: 'assets/org1.png', streak: 70 },
  { initial: 'A', streak: 50 },
  { avatar: 'assets/org1.png', streak: 43 },
  { avatar: 'assets/org1.png', streak: 38 },
];


  constructor() { 
     addIcons({
   'notifications-outline': notifications,
   'list-outline': listOutline,
   'fitness-outline': fitnessOutline,
   'trophy-outline': trophyOutline,
   'person-circle-outline': personCircleOutline,
   'time-outline': timerOutline,
   'home-outline': homeOutline,
   'flash-outline': flashOutline,
   'target-outline': atOutline,
   'lock-closed-outline': lockClosedOutline,
   'lock-open-outline': lockOpenOutline,
   'arrow-forward-circle-outline': arrowForwardCircleOutline,
   'medal-outline': medalOutline,
   'walk-outline': walkOutline,
   'musical-notes-outline': musicalNoteOutline,
   'sparkles-outline': sparklesOutline,
   'flame-outline' : flameOutline,
   'person-add-outline' : personAddOutline,
   'share-social-outline' : shareSocialOutline,
   'share-outline' : shareOutline
 });

   }

  ngOnInit() {
  }

}
