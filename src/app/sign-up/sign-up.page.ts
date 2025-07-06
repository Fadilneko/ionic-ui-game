import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';        
import { FormsModule, NgForm } from '@angular/forms';  
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';

import {
  logoGoogle,
  eyeOutline,
  eyeOffOutline
} from 'ionicons/icons';

declare const google: any;

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements AfterViewInit {
  credentials = { email: '', password: '' };
  showPassword = false;

  constructor(private router: Router) {
    addIcons({
      'logo-google': logoGoogle,
      'eye-outline': eyeOutline,
      'eye-off-outline': eyeOffOutline
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    console.log('Sign‑up with', this.credentials);
    this.router.navigate(['/login']);
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  ngAfterViewInit() {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_WEB_CLIENT_ID.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
    });
    google.accounts.id.renderButton(
      document.getElementById('googleBtn')!,
      { theme: 'outline', size: 'large' }
    );
  }

  handleCredentialResponse(response: any) {
    console.log('ID Token:', response.credential);
    this.router.navigate(['/login']);
  }

  onGoogle() {
    google.accounts.id.prompt();
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
