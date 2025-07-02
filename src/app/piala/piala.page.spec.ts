import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PialaPage } from './piala.page';

describe('PialaPage', () => {
  let component: PialaPage;
  let fixture: ComponentFixture<PialaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PialaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
