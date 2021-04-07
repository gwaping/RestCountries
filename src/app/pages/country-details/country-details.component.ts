import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { CountryService } from 'src/app/services/country.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryInfo : any;

  loadingDone : boolean = false;
  data_subscription : Subscription;

  countriesList : any;

  constructor( private route : ActivatedRoute,
               private router : Router,
               private appService : AppService,
               private dataService : DataService,
               private countryService : CountryService ) {


    this.route.params.subscribe(params => {

      if (params.country) {

        this.countryService.getCountryByName(params.country).subscribe ( result => {

          if (result) {

            this.countryInfo = result[0];

            console.log(this.countryInfo);

            this.countryInfo.currencies = [ ... new Set(this.countryInfo.currencies.map(i => i.name ))].toString();

            this.countryInfo.languages = [ ... new Set(this.countryInfo.languages.map(i =>  " " + i.name  ))].toString();

          }

 

          this.data_subscription = this.dataService.itemsHandler.subscribe(response => {
            this.countriesList = response;
    
             console.log(this.countriesList);

             let borderCountries = [];

              if (this.countryInfo.borders.length > 0) {
                  
                this.countryInfo.borders.forEach(element => {
                  
                  let temp = this.countriesList.find( country => country.alpha3Code == element);

                  if (temp) {
                    borderCountries.push(temp.name);
                  }

                });

              }

             // console.log(borderCountries);

              this.countryInfo.borders = borderCountries;
    
          });


          this.loadingDone = true;


        });


        // this.countryInfo = this.countriesList.find( country => country.name == params.country);

        // console.log(this.countryInfo);

        // this.countryInfo.currencies = [ ... new Set(this.countryInfo.currencies.map(i => i.name ))].toString();

        // this.countryInfo.languages = [ ... new Set(this.countryInfo.languages.map(i =>  " " + i.name  ))].toString();

        


      }
  
    });



  }


  ngOnInit() {
  }


  goToCountryDetail( countryName: string ) {

    this.router.navigate(['/country-details', { country : countryName }]);
}


  onBackClicked() {
     this.router.navigate(["/"])
  }

  setThemeColor() {
    this.appService.setThemeColor();
  }


}
