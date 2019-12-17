import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {filter, map, tap} from 'rxjs/operators';
import {IStoreState} from '../app.reducer';
import {selectChickenList, selectSelectedChicken} from '../store/store.selectors';
import {chickenList} from '../store/chickens/chickens.state';

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
    // console.log(this.searchForm.value.searchQuery)

    this.currentChicken$ = this._store.pipe(
      select(selectChickenList),
      // map((randomName, i) => randomName[i].type === this.searchForm.value.searchQuery),
      tap(a => console.log(a))
    ).subscribe();

    // console.log(this.data$);
  }

}
