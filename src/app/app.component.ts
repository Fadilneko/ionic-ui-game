import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; 
import { FooterComponent } from './footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, CommonModule, FooterComponent],
})
export class AppComponent {
  showFooter = true;

 
  private footerExcludedRoutes = ['/streak', '/shop', '/super'];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
      
        this.showFooter = !this.footerExcludedRoutes.some(path =>
          event.urlAfterRedirects.startsWith(path)
        );
      });
  }
}
