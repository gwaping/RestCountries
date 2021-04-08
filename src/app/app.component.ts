import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rest-countries';

  modeStr = "Dark Mode";

  constructor( private appService : AppService  ) {

  } 

  ngOnInit() {
     sessionStorage.setItem('MODE', 'LIGHT');
  }
  
  toggleDarkmode() {

    if (sessionStorage.getItem('MODE') == 'LIGHT') {
      sessionStorage.setItem('MODE', 'DARK');
      this.modeStr = "Light Mode";
    }
    else {
      sessionStorage.setItem('MODE', 'LIGHT');
      this.modeStr = "Dark Mode";
    }
  
  }

  // setThemeColor() {
  //    this.appService.setThemeColor();
  // }

  setThemeColor() {
    return sessionStorage.getItem('MODE') == 'LIGHT' ? "light-theme" : "dark-theme";
  }

}
