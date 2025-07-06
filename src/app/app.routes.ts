import { Routes } from '@angular/router';

export const routes: Routes = [
      {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'tugas',
    loadComponent: () => import('./tugas/tugas.page').then( m => m.TugasPage)
  },
  {
    path: 'aktifitas',
    loadComponent: () => import('./aktifitas/aktifitas.page').then( m => m.AktifitasPage)
  },
  {
    path: 'piala',
    loadComponent: () => import('./piala/piala.page').then( m => m.PialaPage)
  },
  {
    path: 'statistic',
    loadComponent: () => import('./statistic/statistic.page').then( m => m.StatisticPage)
  },
  {
    path: 'friend-notifikasi',
    loadComponent: () => import('./friend-notifikasi/friend-notifikasi.page').then( m => m.FriendNotifikasiPage)
  },
  {
    path: 'streak',
    loadComponent: () => import('./streak/streak.page').then( m => m.StreakPage)
  },
  {
    path: 'shop',
    loadComponent: () => import('./shop/shop.page').then( m => m.ShopPage)
  },
  {
    path: 'super',
    loadComponent: () => import('./super/super.page').then( m => m.SuperPage)
  },

    {
    path: 'signup',
    loadComponent: () => import('./sign-up/sign-up.page').then( m => m.SignUpPage)
  },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },


];
