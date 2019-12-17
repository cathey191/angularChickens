import {IChickens, initialState} from '../store/store.state';
import {ESearchActions} from './search.actions';

export const storeReducer = (
  state = initialState,
  action: any
): IChickens => {
  switch (action.type) {
    case ESearchActions.GetChickensSuccess: {
      return {
        ...state,
        chickens: action.payload
      };
    }
    case ESearchActions.GetChickenSuccess: {
      return {
        ...state,
        currentChicken: action.payload
      };
    }
    default:
      return state;
  }
};
