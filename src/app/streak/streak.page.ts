import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  closeOutline,
  shareOutline,
  sunnyOutline,
  snowOutline,
  checkmarkCircleOutline,
  chevronBackOutline,
  chevronForwardOutline,



} from 'ionicons/icons';

@Component({
  selector: 'app-streak',
  templateUrl: './streak.page.html',
  styleUrls: ['./streak.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StreakPage implements OnInit {

  segmentValue: 'personal' | 'friends' = 'personal';
  scrolled = false;

  currentDate = new Date();

  monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  weekdayLabels = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  calendarWeeks: number[][] = [];


  highlightedDays = [4, 7];

  dayStartHighlight = 1;
  dayEndHighlight = 9;
  maxDay = 9;

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

     onScroll(event: any) {
    const threshold = 300;
    this.scrolled = event.detail.scrollTop > threshold;
  }

    prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.buildCalendar();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.buildCalendar();
  }

  private buildCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

   
    const firstDayWeekday = new Date(year, month, 1).getDay();
 
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weeks: number[][] = [];
    let week: number[] = [];

   
    for (let i = 0; i < firstDayWeekday; i++) {
      week.push(0);
    }

 
    for (let d = 1; d <= daysInMonth; d++) {
      week.push(d);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

 
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(0);
      }
      weeks.push(week);
    }

    this.calendarWeeks = weeks;
  }


  ngOnInit() {
    this.buildCalendar();
  }

  friendStreaks = [
  { name: 'のぽ', initial:'のぽ', streak: 89, avatar: null, pending: false },
  { name: 'Alvin Fauzie', initial:'AL', streak: 70, avatar: null, pending: false },
  { name: 'Akira',    initial: 'A', streak: 0, avatar: null, pending: true },
  { name: 'ゆ',       initial: 'ゆ', streak: 0, avatar: null, pending: true },
  { name: 'Indar',    initial: 'I', streak: 0, avatar: null, pending: true },
];


}
