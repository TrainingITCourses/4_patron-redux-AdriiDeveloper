// Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// Launches Service
import { LaunchesService } from 'app/services';

// Launch Model
import { Launch } from 'app/models';

// Store 
import { GlobalStore, GlobalTypes } from 'app/store';
import { LoadLaunches, LoadSearchResults } from 'app/store/global-store.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html'
})
export class ChangeDetectionComponent implements OnInit {
  
  launches: Launch[];
  id: number = null;
  type: string = '';

  constructor(private launchesService: LaunchesService, private store: GlobalStore) { }

  ngOnInit() {
    // Dispatch
    this.launchesService.getLaunches().subscribe((launches: Launch[]) => this.store.dispatch(new LoadLaunches(launches)));

    // Get launches to store
    this.store.select$(GlobalTypes.Launches).subscribe((launches) => {
      this.launches = launches;
    });

    this.store.select$(GlobalTypes.Launches).subscribe((launches) => {
      this.launches = launches;
    });

    this.store.select$(GlobalTypes.SearchTypeId).subscribe((id) => {
      this.id = id;
      if (this.id)  {        
        this.type = this.store.selectSnapShot(GlobalTypes.TypeCriteria);
        this.LaunchCriterionChange();
      }
    });
  }

  /**
   * This function performs a filtering in the launch library depending on the search performed
   * @param criterion type and id
   */
  LaunchCriterionChange = () => {
    // Clear launches array
    let filter = [];    

    switch (this.type) {
      case 'agencies':
        filter = this.launches.filter(launch => ((launch.rocket.agencies ? launch.rocket.agencies.find(agency => agency.id === this.id) : false)));
        break;
      case 'types':
        filter = this.launches.filter(launch => launch.missions.find(mission => mission.type === this.id));
        break;
      case 'status':
        filter = this.launches.filter(launch => launch.status === this.id);   
        break;
      default:
        throw new Error(`${this.type} does not match any value`);
    }

    this.store.dispatch(new LoadSearchResults(filter));
  }
}
