import {chickenList} from './chickens/chickens.state';

export interface IParents {
  parentOne: string;
  parentTwo: string;
}

export interface IChicken {
  type: string;
  parents: IParents;
}

export interface IChickens {
  chickens: IChicken[];
  currentChicken: IChicken;
}

export const initialState: IChickens = {
  chickens: chickenList,
  currentChicken: {
    type: 'Water',
    parents: {
      parentOne: 'Gunpowder',
      parentTwo: 'Snowball'
    }
  }
}
