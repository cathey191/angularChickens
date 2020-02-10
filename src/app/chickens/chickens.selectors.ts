import {createSelector} from '@ngrx/store';
import {IStoreState} from '../app.reducer';
import {IChickens} from './chickens.reducer';
import {IChicken} from '../api/chicken-service';

const selectSearch = (state: IStoreState) => state.search;
export namespace ChickenSelectors {
    export const selectChickenList = createSelector(
        selectSearch,
        (state: IChickens) => state.chickens
    );
    export const selectSpecificChicken = createSelector(
        selectChickenList,
        (chickens: IChicken[], { specificChicken }) => {
            return chickens.find((chickenList) => chickenList.type.toLowerCase() === specificChicken.toLowerCase());
        }
    );
}


