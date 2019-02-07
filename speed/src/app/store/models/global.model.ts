// Models
import { Agency, Launch, ResultCriteria, Payload, Status } from 'app/models';
import { SearchCriteria } from './search-criteria.model';

export interface Global {
    agencies: Agency[];
    launches: Launch[];
    searchCriteria: SearchCriteria[];
    searchResults: Launch[];
    searchTypes: ResultCriteria[];
    searchTypeId: number;
    status: Status[];
    types: Payload[];
    typeCriteria: string;
}

export const globalInitialState: Global = {
    agencies: [],
    launches: [],
    searchCriteria: [],
    searchResults: [],
    searchTypes: [],
    searchTypeId: null,
    status: [],
    types: [],
    typeCriteria: ''
};