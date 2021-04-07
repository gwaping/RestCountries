import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rest-countries';

  constructor( private appService : AppService  ) {

  } 

  ngOnInit() {
     sessionStorage.setItem('MODE', 'LIGHT');
  }
  
  toggleDarkmode() {

    if (sessionStorage.getItem('MODE') == 'LIGHT') {
      sessionStorage.setItem('MODE', 'DARK');
    }
    else {
      sessionStorage.setItem('MODE', 'LIGHT');
    }
  
  }

  // setThemeColor() {
  //    this.appService.setThemeColor();
  // }

  setThemeColor() {
    return sessionStorage.getItem('MODE') == 'LIGHT' ? "light-theme" : "dark-theme";
  }

}
