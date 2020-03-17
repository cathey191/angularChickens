import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {IStoreState} from '../app.reducer';
import {Store} from '@ngrx/store';
import {ESearchActions, GetChickens, GetChickensSuccess} from './chickens.actions';
import {filter, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {ChickenService, IChicken} from '../api/chicken-service';
import {ChickenSelectors} from './chickens.selectors';
import {of} from 'rxjs';

@Injectable()
export class ChickenEffects {
    constructor(
        private _actions$: Actions,
        private _store: Store<IStoreState>,
        private _chickenService: ChickenService
    ) {
    }

    @Effect()
    getChicken$ = this._actions$.pipe(
        ofType<GetChickens>(ESearchActions.GetChickens),
        withLatestFrom(this._store.select(ChickenSelectors.selectChickenList)),
        switchMap(([action, chickenList]) => {
            return chickenList.length ? of(null) : this._chickenService.getChickens();
        }),
        filter(Boolean),
        map((chickens: IChicken[]) => new GetChickensSuccess(chickens))
    );
}
