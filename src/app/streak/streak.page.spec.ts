import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreakPage } from './streak.page';

describe('StreakPage', () => {
  let component: StreakPage;
  let fixture: ComponentFixture<StreakPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StreakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
