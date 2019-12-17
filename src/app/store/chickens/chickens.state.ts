import {IChicken} from '../store.state';

export const chickenList: IChicken[] = [
  {
    type: 'Gold',
    parents: {
      parentOne: 'Iron',
      parentTwo: 'Yellow'
    }
  },
  {
    type: 'Snowball',
    parents: {
      parentOne: 'Blue',
      parentTwo: 'Log'
    }
  },
  {
    type: 'Water',
    parents: {
      parentOne: 'Gunpowder',
      parentTwo: 'Snowball'
    }
  },
  {
    type: 'Lava',
    parents: {
      parentOne: 'Coal',
      parentTwo: 'Quartz'
    }
  },
  {
    type: 'Clay',
    parents: {
      parentOne: 'Snowball',
      parentTwo: 'Sand'
    }
  },
  {
    type: 'Leather',
    parents: {
      parentOne: 'String',
      parentTwo: 'Brown'
    }
  },
  {
    type: 'Netherwart',
    parents: {
      parentOne: 'Brown',
      parentTwo: 'Glowstone'
    }
  }
];
