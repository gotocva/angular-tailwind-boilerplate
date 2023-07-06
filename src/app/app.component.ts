import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public showNavbar: boolean = true;
    showSticky = true;

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
          if(evt instanceof NavigationEnd) {
            console.log(evt);
            if (evt.urlAfterRedirects == '/' || evt.urlAfterRedirects == '/sign-up') {
              this.showNavbar = false;
            } else {
              this.showNavbar = true;
            }
          }
        });
    }
}