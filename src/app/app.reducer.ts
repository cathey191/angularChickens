import {ActionReducerMap} from '@ngrx/store';
import {IChickens, storeReducer} from './chickens/chickens.reducer';

export interface IStoreState {
  search: IChickens;
}

export const appReducer: ActionReducerMap<any> = {
  search: storeReducer
};
