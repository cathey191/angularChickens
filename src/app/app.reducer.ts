import {ActionReducerMap} from '@ngrx/store';
import {storeReducer} from './search/search.reducer';
import {IChickens} from './store/store.state';

export interface IStoreState {
  search: IChickens;
}

export const appReducer: ActionReducerMap<any> = {
  search: storeReducer
};
