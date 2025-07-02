import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AktifitasPage } from './aktifitas.page';

describe('AktifitasPage', () => {
  let component: AktifitasPage;
  let fixture: ComponentFixture<AktifitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AktifitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
