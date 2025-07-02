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


} from 'ionicons/icons';

@Component({
  selector: 'app-piala',
  templateUrl: './piala.page.html',
  styleUrls: ['./piala.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PialaPage implements OnInit {

  showBoost = true;

  leaderboard = [
  { name: '张玲', icon: 'person-circle-outline', color: '#60a5fa', xp: 278 },
  { name: 'Routiny', icon: 'person-circle-outline', color: '#f472b6', xp: 225 },
  { name: 'みり', icon: 'person-circle-outline', color: '#fbbf24', xp: 190 },
  { name: 'Naphtha', icon: 'person-circle-outline', color: '#34d399', xp: 173 },
  { name: 'Haniaa', icon: 'person-circle-outline', color: '#a78bfa', xp: 162, boost: true },
  { name: '张玲', icon: 'person-circle-outline', color: '#60a5fa', xp: 278 },
  { name: 'Routiny', icon: 'person-circle-outline', color: '#f472b6', xp: 225 },
  { name: 'みり', icon: 'person-circle-outline', color: '#fbbf24', xp: 190 },
  { name: 'Naphtha', icon: 'person-circle-outline', color: '#34d399', xp: 173 },
  { name: 'Haniaa', icon: 'person-circle-outline', color: '#a78bfa', xp: 162, boost: true },
  { name: '张玲', icon: 'person-circle-outline', color: '#60a5fa', xp: 278 },
  { name: 'Routiny', icon: 'person-circle-outline', color: '#f472b6', xp: 225 },
  { name: 'みり', icon: 'person-circle-outline', color: '#fbbf24', xp: 190 },
  { name: 'Naphtha', icon: 'person-circle-outline', color: '#34d399', xp: 173 },
  { name: 'Haniaa', icon: 'person-circle-outline', color: '#a78bfa', xp: 162, boost: true }
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
 });

   }

  ngOnInit() {
  }

}
