import {createAction, props} from '@ngrx/store';
import {People} from '../people/people';

export const loadPeople = createAction('[People List] Load People');
export const loadPeopleSuccess = createAction('[People List] Load People Success', props<{people: People[]}>());
export const loadPeopleError = createAction('[People List] Load People Error');