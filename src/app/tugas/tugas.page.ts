import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
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
  sparklesOutline


} from 'ionicons/icons';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.page.html',
  styleUrls: ['./tugas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TugasPage implements OnInit {

  segmentValue: 'quests' | 'badges' = 'quests';
 
 
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
 });
 
   }
 
   hideHeader = false;
 
 onScroll(event: CustomEvent) {
   const scrollTop = event.detail.scrollTop;
   this.hideHeader = scrollTop > 50; 
 }
 
 
 
 
   currentMonthLabel = 'NOVEMBER';
   currentQuestTitle = "Oscar’s Ode to Botticelli";
   daysRemaining = 21;
   totalQuests = 25;
   completedQuests = 14;
 
   dailyQuests = [
   {
     icon: 'flash-outline',
     title: 'Earn 20 XP',
     current: 20,
     total: 20,
     rewardIcon: 'assets/chest-open.png', 
   },
   {
     icon: 'arrow-forward-circle-outline',
     rewardIcon: 'assets/chest-abu.png',
     title: 'Score 90% or higher in 2 lessons',
     current: 0,
     total: 2,
   },
 ];
 
   
   
 
   get questProgressValue(): number {
     return this.totalQuests > 0 ? this.completedQuests / this.totalQuests : 0;
   }
   get questProgressPercent(): number {
     return Math.round(this.questProgressValue * 100);
   }
 
 
   calcDailyProgress(item: { current: number; total: number; }): number {
     return item.total > 0 ? item.current / item.total : 0;
   }
 
 badgeData = [
   {
     year: '2024',
     badges: [
       { icon: 'medal-outline', color: '#0dc97d', title: '2024 Summer Owlympics', month: 'August' },
       { icon: 'walk-outline', color: '#7f5af0', title: 'Eddy’s Summer Sprint', month: 'July' },
       { icon: 'musical-notes-outline', color: '#f78eff', title: 'Bea’s Jazz Jam', month: 'February' },
       { icon: 'sparkles-outline', color: '#3b82f6', title: 'Lily and Zari’s New Year’s Celebration', month: 'January' }
     ]
   },
   {
     year: '2023',
     badges: [
       { icon: 'medal-outline', color: '#0dc97d', title: '2024 Summer Owlympics', month: 'August' },
       { icon: 'walk-outline', color: '#7f5af0', title: 'Eddy’s Summer Sprint', month: 'July' },
       { icon: 'musical-notes-outline', color: '#f78eff', title: 'Bea’s Jazz Jam', month: 'February' },
       { icon: 'sparkles-outline', color: '#3b82f6', title: 'Lily and Zari’s New Year’s Celebration', month: 'January' }
     ]
   }
 ];
 
 
   

  ngOnInit() {
  }

}
