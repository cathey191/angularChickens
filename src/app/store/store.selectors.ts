import {IChickens} from './store.state';
import {createSelector} from '@ngrx/store';
import {IStoreState} from '../app.reducer';

const selectSearch = (state: IStoreState) => state.search;

export const selectChickenList = createSelector(
  selectSearch,
  (state: IChickens) => state.chickens
);

// export const selectSelectedChicken = createSelector(
//   selectChickens,
//   (state: IChickens) => state.selectedChicken
// )
