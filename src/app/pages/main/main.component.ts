import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { CountryService } from 'src/app/services/country.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  countriesList : any;
  filteredCountriesList : any;
  regionList : any;

  searchedCountry : string;
  loadingDone : boolean = false;

  constructor( private countryService : CountryService, 
               private dataService : DataService,
               private appService : AppService ) { }

  ngOnInit() {
     this.getAllCountries();
  }


  onChangeSearch() {

    // console.log(this.searchedCountry.toLowerCase());

    this.filteredCountriesList = this.countriesList.filter (item => item.name.toLowerCase().startsWith(this.searchedCountry.toLowerCase()) );

  }


  onChangeRegion(event) {

    // get index of selected region
    console.log(event.target.options.selectedIndex);
    console.log(this.regionList[event.target.options.selectedIndex - 1]);

    this.filteredCountriesList = this.countriesList.filter (item => item.region == this.regionList[event.target.options.selectedIndex  - 1]);

    console.log(this.filteredCountriesList);
   
  }

  getAllCountries() {
     this.countryService.getAllCountries().subscribe(result => {
       //
       console.log(result);

       this.countriesList = result;

       this.filteredCountriesList = [...this.countriesList];

       // get regions 
       this.regionList = [... new Set(this.countriesList.filter(item => item.region != "")
                                    .map(item => item.region)
                                     )];

      
      this.dataService.setItems(this.countriesList);

      this.loadingDone = true;

     });
  } 

  setThemeColor() {
    this.appService.setThemeColor();
  }


}
