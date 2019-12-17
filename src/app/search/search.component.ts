import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {find, map, tap} from 'rxjs/operators';
import {IStoreState} from '../app.reducer';
import {selectChickenList, selectSelectedChicken} from '../store/store.selectors';
import {Observable} from 'rxjs';
import {IChicken, IChickens} from '../store/store.state';

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
    // console.log()

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
