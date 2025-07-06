import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';        
import { FormsModule, NgForm } from '@angular/forms';  
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';

import {
  logoGoogle

} from 'ionicons/icons';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements AfterViewInit {

  credentials = { email: '', password: '' };

  constructor(private router: Router) {
     addIcons({
    'logo-google': logoGoogle
     });
  }

  onSubmit() {
  
  if (!this.credentials.email || !this.credentials.password) {
    return;
  }
  console.log('Login with', this.credentials);
  this.router.navigate(['/home']);
}

   ngAfterViewInit() {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_WEB_CLIENT_ID.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
    });
    google.accounts.id.renderButton(
      document.getElementById('googleBtn'),
      { theme: 'outline', size: 'large' }
    );
  }

  handleCredentialResponse(response: any) {
   
    console.log('ID Token:', response.credential);
    
    this.router.navigate(['/home']);
  }

  onGoogle() {

    google.accounts.id.prompt(); 
  }

  onForgot() {
    this.router.navigate(['/forgot']);
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }
}
