// Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// Models
import { ResultCriteria } from 'app/models';

// Store 
import { GlobalStore, GlobalTypes, LoadSearchTypeId } from 'app/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-criterion-types',
  templateUrl: './criterion-types.component.html'
})
export class CriterionTypeComponent implements OnInit {

  criterionType: ResultCriteria[];

  constructor(private store: GlobalStore) {}

  ngOnInit() {
    // Get search types to store
    this.store.select$(GlobalTypes.SearchTypes).subscribe((types) => {
      this.criterionType = types;
    });
  }

  criterionTypeChange = (id) => {
    this.store.dispatch(new LoadSearchTypeId(id));
  }
}
