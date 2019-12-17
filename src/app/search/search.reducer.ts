import {initialState} from '../store/store.state';
import {ESearchActions, SearchActions} from './search.actions';
import {IStoreState} from '../app.reducer';

export const searchReducer = (
  state = initialState,
  action: SearchActions
): IStoreState => {
  switch (action.type) {
    case ESearchActions.GetChickensSuccess: {
      return {
        ...state,
        search: {
          chickens: action.payload
        }
      };
    }
    case ESearchActions.GetChickenSuccess: {
      return {
        ...state,
        search: {
          currentChicken: action.payload
        }
      };
    }
    default:
      return state;
  }
};
