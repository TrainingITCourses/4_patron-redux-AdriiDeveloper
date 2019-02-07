import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { globalStoreReducer } from './global-store.reducer';

import { Global, globalInitialState } from './models/global.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalStore {

  private state: Global = { ...globalInitialState };
  private agencies$ = new BehaviorSubject<any>(this.state.agencies);
  private launches$ = new BehaviorSubject<any>(this.state.launches);
  private searchCriteria$ = new BehaviorSubject<any>(this.state.searchCriteria);
  private searchResults$ = new BehaviorSubject<any>(this.state.searchResults);
  private searchTypes$ = new BehaviorSubject<any>(this.state.searchTypes);
  private searchTypeId$ = new BehaviorSubject<number>(this.state.searchTypeId);
  private status$ = new BehaviorSubject<any>(this.state.status);
  private types$ = new BehaviorSubject<any>(this.state.types);
  private typeCriteria$ = new BehaviorSubject<string>(this.state.typeCriteria);

  select$ = (slice: GlobalTypes) => {
    switch (slice) {
      case GlobalTypes.Agencies:
        return this.agencies$.asObservable();
      case GlobalTypes.Launches:
        return this.launches$.asObservable();
      case GlobalTypes.SearchCriteria:
        return this.searchCriteria$.asObservable();
      case GlobalTypes.SearchResults:
        return this.searchResults$.asObservable();
      case GlobalTypes.Status:
        return this.status$.asObservable();
      case GlobalTypes.SearchTypes:
        return this.searchTypes$.asObservable();
      case GlobalTypes.SearchTypeId:
        return this.searchTypeId$.asObservable();
      case GlobalTypes.Types:
        return this.types$.asObservable();
    }
  }

  selectSnapShot = (slice: GlobalTypes) => {
    switch (slice) {
      case GlobalTypes.TypeCriteria:
        return this.state.typeCriteria;
    }
  }

  dispatch = (action: GlobalActions) => {
    console.log('dispatching...', action);

    this.state = globalStoreReducer(this.state, action);

    switch (action.type) {
      case GlobalActionTypes.LoadAgencies:
        this.agencies$.next([...this.state.agencies]);
        break;
      case GlobalActionTypes.LoadLaunches:
        this.launches$.next([...this.state.launches]);
        break;
      case GlobalActionTypes.LoadSearchCriteria:
        this.searchCriteria$.next([...this.state.searchCriteria]);
        break;
      case GlobalActionTypes.LoadSearchResults:
        this.searchResults$.next([...this.state.searchResults]);
        break;
      case GlobalActionTypes.LoadSearchTypes:
        this.searchTypes$.next([...this.state.searchTypes]);
        break;
      case GlobalActionTypes.LoadSearchTypeId:
        this.searchTypeId$.next(this.state.searchTypeId);
        break;
      case GlobalActionTypes.LoadStatus:
        this.status$.next([...this.state.status]);
        break;
      case GlobalActionTypes.LoadTypes:
        this.types$.next([...this.state.types]);
        break;
      case GlobalActionTypes.LoadTypeCriteria:
        this.typeCriteria$.next(this.state.typeCriteria);
        break;
    }
  }
}

export enum GlobalTypes {
  Agencies = 'agencies',
  Launches = 'launches',
  SearchCriteria = 'searchCriteria',
  SearchResults = 'searchResults',
  SearchTypes = 'searchTypes',
  SearchTypeId = 'searchTypeId',
  Status = 'status',
  Types = 'Types',
  TypeCriteria = 'TypeCriteria'
}
