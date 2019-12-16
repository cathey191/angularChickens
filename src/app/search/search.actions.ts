import {Action} from '@ngrx/store';

export enum ESearchActions {
  GetData = '[data] get chickens'
}

export class GetData implements Action {
  public readonly type = ESearchActions.GetData;
}

export type SearchActions = GetData;
