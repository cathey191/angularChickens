import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {IStoreState} from '../app.reducer';
import {selectSelectedChicken} from '../store/store.selectors';
import {Observable} from 'rxjs';
import {IChicken} from '../store/store.state';
import {GetChickens} from './search.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public currentChicken$: Observable<IChicken>;

  constructor(private _store: Store<IStoreState>) {}

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  public ngOnInit () {
    this.currentChicken$ = this._store.pipe(
      select(selectSelectedChicken)
    );
  }

  public search () {
    console.log("working")

      // todo subscribe to the search result which is in the store

    // this._store.dispatch(new GetChicken())

    // this.currentChicken$ = this._store.pipe(
    //   // tap(e => console.log(e)),
    //   select(selectChickenList),
    //   map(chickens => chickens.find(
    //     (chickenList) => chickenList.type === this.searchForm.value.searchQuery
    //   )),
    //   tap(a => console.log(a))
    // );
  }

}
