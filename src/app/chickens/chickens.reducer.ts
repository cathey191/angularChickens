import {ESearchActions} from './chickens.actions';
import {IChicken} from '../api/chicken-service';

export interface IChickens {
    chickens: IChicken[];
    currentChicken: IChicken;
}

export const initialState: IChickens = {
    chickens: [],
    currentChicken: {
        type: 'Water',
        parents: {
            parentOne: 'Gunpowder',
            parentTwo: 'Snowball'
        }
    }
};

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
    case ESearchActions.GetCurrentChickenSuccess: { // todo listen to search done action
      return {
        ...state,
        currentChicken: action.payload // todo chicken returned
      };
    }
    case ESearchActions.GetChicken: {
      return {
        ...state,
        currentChicken: action.payload
      };
    }
    default:
      return state;
  }
};
