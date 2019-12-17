import {ActionReducerMap} from '@ngrx/store';
import {searchReducer} from './search/search.reducer';
import {IChickens} from './store/store.state';

export interface IStoreState {
  search: IChickens;
}

export const appReducer: ActionReducerMap<any> = {
  search: searchReducer
};
