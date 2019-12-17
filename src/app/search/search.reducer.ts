import {IChickens, initialState} from '../store/store.state';
import {ESearchActions, SearchActions} from './search.actions';

export const storeReducer = (
  state = initialState,
  action: SearchActions
): IChickens => {
  switch (action.type) {
    case ESearchActions.GetChickensSuccess: {
      return {
        ...state,
        // @ts-ignore
        chickens: action.payload
      };
    }
    case ESearchActions.GetChickenSuccess: {
      return {
        ...state,
        // @ts-ignore
        currentChicken: action.payload
      };
    }
    default:
      return state;
  }
};
