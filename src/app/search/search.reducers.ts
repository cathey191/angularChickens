import {dataState, IData} from '../store/store.state';
import {ESearchActions, SearchActions} from './search.actions';

export const searchReducers = (
  state = dataState,
  action: SearchActions
): IData => {
  switch (action.type) {
    case ESearchActions.GetData: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
