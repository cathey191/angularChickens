import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {IStoreState} from '../app.reducer';
import {ChickenSelectors} from './chickens.selectors';
import {Observable} from 'rxjs';
import {GetChickens} from './chickens.actions';
import {IChicken} from '../api/chicken-service';

import {isBool, Value} from '@trademe/ensure';

@Component({
  selector: 'app-search',
  templateUrl: './chickens.component.html',
  styleUrls: ['./chickens.component.scss']
})
export class ChickensComponent implements OnInit {

  public currentChicken$: Observable<IChicken>;
  public chickens$: Observable<IChicken[]>;
  @Input() @Value(isBool) public inline: boolean;

  constructor(private _store: Store<IStoreState>) {}

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  public ngOnInit () {
    this._store.dispatch(new GetChickens());
    this.chickens$ = this._store.pipe(
        select(ChickenSelectors.selectChickenList)
    );

    console.log(this.chickens$)

    // this.currentChicken$ = this._store.pipe(
    //   select(selectSelectedChicken)
    // );
  }

  public search () {

      this.currentChicken$ = this._store.pipe(
          select(ChickenSelectors.selectSpecificChicken, { specificChicken: this.searchForm.value.searchQuery })
      );


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
