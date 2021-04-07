import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-country-summary',
  templateUrl: './country-summary.component.html',
  styleUrls: ['./country-summary.component.scss']
})
export class CountrySummaryComponent implements OnInit {

  @Input() country : any;

  constructor(private router : Router, 
              private appService : AppService ) { }

  ngOnInit() {
    // console.log(this.country);
  }

  goToCountryDetail() {
      console.log(this.country.name);
 
      this.router.navigate(['/country-details', { country : this.country.name }]);
  }


  setThemeColor() {
    this.appService.setThemeColor();
  }



}
