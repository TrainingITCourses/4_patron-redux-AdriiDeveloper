// Angular
import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// Models
import { Launch } from 'app/models';

// Store 
import { GlobalStore, GlobalTypes } from 'app/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  filteredLaunches: Launch[] = null;

  constructor(private ref: ChangeDetectorRef,private store: GlobalStore) {}
  
 
  ngOnInit() {
    // Get launches to store
    this.store.select$(GlobalTypes.SearchResults).subscribe((results) => {
      console.log(results);
      
      this.filteredLaunches = results;
      this.ref.detectChanges();
    });
  }
}
