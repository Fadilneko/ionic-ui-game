import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  selector: 'app-super',
  templateUrl: './super.page.html',
  styleUrls: ['./super.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SuperPage implements OnInit {

  constructor(private router: Router) {
    addIcons({
      'close-outline': closeOutline,
    })
  }

    goToShop() {
    this.router.navigate(['/shop']);
  }

  ngOnInit() {
  }

}
