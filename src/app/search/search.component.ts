import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IData} from '../store/store.state';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public data$;

  constructor(private store: Store<IData>) {}

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  public search () {
    this.data$ = this.store.pipe(
      tap(a => console.log(a)),
      select('search'),
      tap(a => console.log(a))
    ).subscribe();

    console.log(this.data$);
  }

}
