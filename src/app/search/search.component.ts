import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {find, map, tap} from 'rxjs/operators';
import {IStoreState} from '../app.reducer';
import {selectChickenList} from '../store/store.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public currentChicken$;

  constructor(private _store: Store<IStoreState>) {}

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  public search () {
    this.currentChicken$ = this._store.pipe(
      select(selectChickenList),
      map(chickens => chickens.find(
        (chickenList) => chickenList.type === this.searchForm.value.searchQuery
      )),
      tap(a => console.log(a))
    ).subscribe();
  }

}
