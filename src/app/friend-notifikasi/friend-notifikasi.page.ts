import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-friend-notifikasi',
  templateUrl: './friend-notifikasi.page.html',
  styleUrls: ['./friend-notifikasi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FriendNotifikasiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  feedList = [
    {
      name: 'Alvin Fauzie',
      avatar: 'https://i.pravatar.cc/100?u=alvin',
      time: '1 day',
      message: 'Did more than 10 lessons in a day!',
      image: 'assets/img/book.png',
      reactionCount: 10,
    },
    {
      name: 'Bob Singadikrama',
      initial: 'B',
      time: '1 day',
      message: 'Completed 3 Friends Quests in a row!',
      image: 'assets/img/chest.png',
      reactionCount: 9,
    },
  ];

}
