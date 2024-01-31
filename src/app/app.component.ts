import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectPeople} from './store/people.selectors';
import {loadPeople} from './store/people.actions';
import {AppState} from './store/app.state';
import {People} from './people/people';

@Component({
  selector: 'app-root',
  template: `
    <div class="people-container">
      <app-people
        *ngFor="let people of people$ | async; trackBy: trackById"
        [people]="people"
        class="people"
      ></app-people>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  people$ = this.store.select(selectPeople);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadPeople());
  }

  trackById(index: number, item: People): string {
    return item.name;
  }
}
