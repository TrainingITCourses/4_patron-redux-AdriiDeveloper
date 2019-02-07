// Angular
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

// Init Configuration
import { INIT_VALUES } from './configuration/init-values';

// Models
import { SearchCriteria } from 'app/store/models';

// Store 
import { GlobalStore, GlobalTypes } from 'app/store';
import { LoadSearchCriteria } from 'app/store/global-store.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-criterion-values',
  templateUrl: './criterion-values.component.html'
})
export class CriterionValuesComponent implements OnInit {

  searchCriteria: SearchCriteria[] = [];

  @Output() criterionTypeChange = new EventEmitter<string>();
 
  constructor(private store: GlobalStore) {}

  ngOnInit() {
    this.store.dispatch(new LoadSearchCriteria(INIT_VALUES.data));

    // Get search criteria to store
    this.store.select$(GlobalTypes.SearchCriteria).subscribe((criteria) => {
      this.searchCriteria = criteria;
    });
  }
}