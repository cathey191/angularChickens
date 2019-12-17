import {Action} from '@ngrx/store';
import {IChicken} from '../store/store.state';

export enum ESearchActions {
  GetChickens = '[data] get chickens',
  GetChickensSuccess = '[data] get chickens success',
  GetChicken = '[data] get chicken',
  GetChickenSuccess = '[data] get chickens success'
}

export class GetChickens implements Action {
  public readonly type = ESearchActions.GetChickens;
}

export class GetChickensSuccess implements Action {
  public readonly type = ESearchActions.GetChickensSuccess;
  constructor(public payload: IChicken[]) {}
}

export class GetChicken implements Action {
  public readonly type = ESearchActions.GetChicken;
}

export class GetChickenSuccess implements Action {
  public readonly type = ESearchActions.GetChickenSuccess;
  constructor(public payload: IChicken) {}
}

export type SearchActions = GetChickens | GetChickensSuccess | GetChicken | GetChickenSuccess;
