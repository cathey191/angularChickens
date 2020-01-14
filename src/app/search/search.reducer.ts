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
    case ESearchActions.GetCurrentChickenSuccess: {
      return {
        ...state,
        currentChicken: action.payload
      };
    }
    case ESearchActions.GetChicken: {    // todo listen to search done action
      return {
        ...state,
        currentChicken: action.payload // todo chicken returned
        ))
      };
    }
    default:
      return state;
  }
};
