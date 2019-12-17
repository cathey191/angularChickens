import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IChickens} from '../store/store.state';
import {select, Store} from '@ngrx/store';
import {map, tap} from 'rxjs/operators';
import {IStoreState} from '../app.reducer';
import {selectChickenList} from '../store/store.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public chickenList$;

  constructor(private _store: Store<IStoreState>) {}

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  public search () {
    this.chickenList$ = this._store.pipe(
      select(selectChickenList),
      tap(a => console.log(a))
    ).subscribe();

    // console.log(this.data$);
  }

}
