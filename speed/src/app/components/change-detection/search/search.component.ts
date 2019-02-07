// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Models
import { ResultCriteria, Status } from 'app/models';

// Launches Service
import { LaunchesService } from 'app/services';

// Store 
import { GlobalStore, LoadAgencies } from 'app/store';
import { LoadTypes, LoadStatus, LoadSearchTypes } from 'app/store/global-store.actions';
import { LoadTypeCriteria } from 'app/store/global-store.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  criterionType: string;

  constructor(private launchesService: LaunchesService, private store: GlobalStore) {}

  /**
   * Depending on the selected search criteria, the related types are collected
   * @param criterionType type of criterion
   */
  onCriterionTypeChange = (criterionType: string) => {
    this.store.dispatch(new LoadTypeCriteria(criterionType));
    this.criterionType = criterionType;

    switch (this.criterionType) {
      case 'agencies':
        this.launchesService.getAgencies().subscribe((agencies) => {
          this.store.dispatch(new LoadAgencies(agencies));
          this.emitCriterionResults(agencies);
        });
        break;
      case 'types':
        this.launchesService.getTypes().subscribe((types) => {
          this.store.dispatch(new LoadTypes(types));
          this.emitCriterionResults(types);
        });
        break;
      case 'status':
        this.launchesService.getStatus().subscribe((status) => {
          this.store.dispatch(new LoadStatus(status));
          this.emitCriterionResults(status);
        });
        break;
      default:
        throw new Error(`${this.criterionType} does not match any value`);
    }
  }

  /**
   * This function to do dispatch with the types related to the selected search criteria
   * @param results The types of the selected search criteria
   */
  emitCriterionResults = (types: Status[]): void => {
    let criterionTypes = [];

    types.forEach((result) => {
      criterionTypes.push(new ResultCriteria(result.id, result.name));
    });
    
    this.store.dispatch(new LoadSearchTypes(criterionTypes));
  }
}
