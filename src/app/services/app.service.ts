import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  setThemeColor() {
    return sessionStorage.getItem('MODE') == 'LIGHT' ? "light-theme" : "dark-theme";
  }
  
}
