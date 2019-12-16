export interface IParents {
  parentOne: string;
  parentTwo: string;
}

export interface IElement {
  type: string;
  parents: IParents;
}

export interface IData {
  tierThree: IElement;
}

export const dataState: IData = {
  tierThree:
    {
      type: 'Water',
      parents: {
        parentOne: 'Gunpowder',
        parentTwo: 'Snowball'
      }
    }
}

export function getInitialState(): IData {
  return dataState;
}
