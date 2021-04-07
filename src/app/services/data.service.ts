import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private itemsSource = new BehaviorSubject<any>(null);
  itemsHandler = this.itemsSource.asObservable();

  refreshHandler = new BehaviorSubject<any>(null);

  setItems(items: any) {
      this.itemsSource.next(items);
  }
}
