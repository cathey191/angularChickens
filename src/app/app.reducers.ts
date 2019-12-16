import {ActionReducerMap} from '@ngrx/store';
import {searchReducers} from './search/search.reducers';

export const appReducers: ActionReducerMap<any> = {
  search: searchReducers
};
