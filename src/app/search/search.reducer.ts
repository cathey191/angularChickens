import {initialState, IChickens} from '../store/store.state';
import {ESearchActions, SearchActions} from './search.actions';

export const searchReducer = (
  state = initialState,
  action: SearchActions
): IChickens => {
  switch (action.type) {
    case ESearchActions.GetChickensSuccess: {
      return {
        ...state,
        chickens: action.payload
      };
    }
    default:
      return state;
  }
};
