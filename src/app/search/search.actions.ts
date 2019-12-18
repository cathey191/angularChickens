import {Action} from '@ngrx/store';
import {IChicken} from '../store/store.state';

export enum ESearchActions {
  GetChickens = '[data] get chickens',
  GetChickensSuccess = '[data] get chickens success',
  GetChicken = '[data] get search chicken',
  GetCurrentChickenSuccess = '[data] get chickens success'
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
  constructor(public payload: string) {}
}

export class GetCurrentChickenSuccess implements Action {
  public readonly type = ESearchActions.GetCurrentChickenSuccess;
  constructor(public payload: IChicken) {}
}

export type SearchActions = GetChickens | GetChickensSuccess | GetChicken | GetCurrentChickenSuccess;
