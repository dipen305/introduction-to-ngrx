import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {
  loadPeople,
  loadPeopleError,
  loadPeopleSuccess,
} from './people.actions';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { PeopleService } from '../api/people.service';

@Injectable()
export class PeopleEffects {
  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      switchMap(() => this.peopleService.getPeople().pipe(
        map(people => loadPeopleSuccess({people})),
        catchError(() => [loadPeopleError()])
      ))
    )
  );

  constructor(private actions$: Actions, private peopleService: PeopleService) {
  }
}
