// Models
import { Global, globalInitialState } from './models/global.model';

// Actions
import { GlobalActions, GlobalActionTypes } from './global-store.actions';

export function globalStoreReducer(state = globalInitialState, action: GlobalActions): Global {
  const result = { ...state };

  switch (action.type) {
    case GlobalActionTypes.LoadAgencies:
      result.agencies = action.payload;
      break;
    case GlobalActionTypes.LoadLaunches:
      result.launches = action.payload;
      break;
    case GlobalActionTypes.LoadSearchCriteria:
      result.searchCriteria = action.payload;
      break;
    case GlobalActionTypes.LoadSearchResults:
      result.searchResults = action.payload;
      break;
    case GlobalActionTypes.LoadSearchTypes:
      result.searchTypes = action.payload;
      break;
    case GlobalActionTypes.LoadSearchTypeId:
      result.searchTypeId = action.payload;
      break;
    case GlobalActionTypes.LoadStatus:
      result.status = action.payload;
      break;
    case GlobalActionTypes.LoadTypes:
      result.types = action.payload;
      break;
    case GlobalActionTypes.LoadTypeCriteria:
      result.typeCriteria = action.payload;
      break;
  }

  return result;
}
