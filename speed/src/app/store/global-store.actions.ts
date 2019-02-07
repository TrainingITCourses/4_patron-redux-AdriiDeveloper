// Models
import { Agency, Launch, ResultCriteria, Payload, Status } from 'app/models';
import { SearchCriteria } from './models';

export enum GlobalActionTypes {
  LoadAgencies = '[Global] LoadAgencies',
  LoadLaunches = '[Global] LoadLaunches',
  LoadSearchCriteria = '[Global] LoadSearchCriteria',
  LoadSearchResults = '[Global] LoadSearchResults',
  LoadSearchTypes = '[Global] LoadSearchTypes',
  LoadSearchTypeId = '[Global] LoadSearchTypeId',
  LoadStatus = '[Global] LoadStatus',
  LoadTypes = '[Global] LoadTypes',
  LoadTypeCriteria = '[Global] LoadTypeCriteria'
}

export interface Action {
  readonly type: GlobalActionTypes;
  readonly payload: any;
}

export class LoadAgencies implements Action {
  readonly type = GlobalActionTypes.LoadAgencies;
  constructor(readonly payload: Agency[]) {}
}

export class LoadLaunches implements Action {
  readonly type = GlobalActionTypes.LoadLaunches;
  constructor(readonly payload: Launch[]) {}
}

export class LoadSearchCriteria implements Action {
  readonly type = GlobalActionTypes.LoadSearchCriteria;
  constructor(readonly payload: SearchCriteria[]) {}
}

export class LoadSearchResults implements Action {
  readonly type = GlobalActionTypes.LoadSearchResults;
  constructor(readonly payload: Launch[]) {}
}

export class LoadSearchTypes implements Action {
  readonly type = GlobalActionTypes.LoadSearchTypes;
  constructor(readonly payload: ResultCriteria[]) {}
}

export class LoadSearchTypeId implements Action {
  readonly type = GlobalActionTypes.LoadSearchTypeId;
  constructor(readonly payload: number) {}
}

export class LoadStatus implements Action {
  readonly type = GlobalActionTypes.LoadStatus;
  constructor(readonly payload: Status[]) {}
}

export class LoadTypes implements Action {
  readonly type = GlobalActionTypes.LoadTypes;
  constructor(readonly payload: Payload[]) {}
}

export class LoadTypeCriteria implements Action {
  readonly type = GlobalActionTypes.LoadTypeCriteria;
  constructor(readonly payload: string) {}
}

export type GlobalActions =
  LoadAgencies |
  LoadLaunches |
  LoadSearchCriteria |
  LoadSearchResults |
  LoadSearchTypes |
  LoadSearchTypeId |
  LoadStatus |
  LoadTypes |
  LoadTypeCriteria;
