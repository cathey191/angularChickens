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

  // @Effect()
  // getChicken$ = this._actions$.pipe(
  //   ofType<GetChicken>(ESearchActions.GetChicken),
  //   map()
  // )
}
