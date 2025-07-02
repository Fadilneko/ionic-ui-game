import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FriendNotifikasiPage } from './friend-notifikasi.page';

describe('FriendNotifikasiPage', () => {
  let component: FriendNotifikasiPage;
  let fixture: ComponentFixture<FriendNotifikasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendNotifikasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
