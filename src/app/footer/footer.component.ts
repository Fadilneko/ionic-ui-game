import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router'; 

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
  selector: 'app-footer',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  activeTab: string = '';

  constructor(private router: Router) {

    addIcons({
      'home-outline': homeOutline,
      'list-outline': listOutline,
      'fitness-outline': fitnessOutline,
      'trophy-outline': trophyOutline,
      'person-circle-outline': personCircleOutline,
      'notifications-outline': notifications,
      'time-outline': timerOutline,
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

  ngOnInit() {

    this.setActiveFromUrl(this.router.url);


    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.setActiveFromUrl(e.urlAfterRedirects);
      });
  }

  private setActiveFromUrl(url: string) {
    if (url.startsWith('/home')) {
      this.activeTab = 'home';
    } else if (url.startsWith('/tugas')) {
      this.activeTab = 'list';
    } else if (url.startsWith('/aktifitas')) {
      this.activeTab = 'fitness';
    } else if (url.startsWith('/piala')) {
      this.activeTab = 'trophy';
    } else if (url.startsWith('/statistic')) {
      this.activeTab = 'person';
    } else if (url.startsWith('/friend-notifikasi')) {
      this.activeTab = 'notif';
    } else {

      this.activeTab = '';
    }
  }

  setActive(tab: string) {
    this.activeTab = tab;
  }
}
