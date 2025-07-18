import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Misard';
  constructor(private router: Router) { }
  showChat = false;
  ngOnInit(): void {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out'
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: any) => {
        if (event.navigationTrigger !== 'imperative') {
          this.router.navigate(['']);
        }
      });

    // Reinitialize AOS on any navigation change
    this.router.events.subscribe(() => {
      setTimeout(() => AOS.refresh(), 100);
    });
  }
}
