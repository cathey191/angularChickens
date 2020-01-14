import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {IStoreState} from '../app.reducer';
import {Store} from '@ngrx/store';
import {ESearchActions, GetChicken} from './search.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class ChickenEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<IStoreState>
  ) {}

  @Effect()
  getChicken$ = this._actions$.pipe(
    ofType<GetChicken>(ESearchActions.GetChicken),
    // todo switchmap onto the select
    // todo select all the chickens from store
      map(chickens => chickens.find(
        (chickenList) => chickenList.type === action.search query // this is from the ofType<GetChicken>(ESearchActions.GetChicken)
      ))
    // todo map onto a new search done action
  );
}
