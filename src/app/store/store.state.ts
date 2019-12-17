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
  chickens:
    [{
      type: 'Water',
      parents: {
        parentOne: 'Gunpowder',
        parentTwo: 'Snowball'
      }
    },
    {
      type: 'Snowball',
      parents: {
        parentOne: 'Blue',
        parentTwo: 'Log'
      }
    }],
  currentChicken: {
    type: 'Water',
    parents: {
      parentOne: 'Gunpowder',
      parentTwo: 'Snowball'
    }
  }
}
