import {createReducer, on} from '@ngrx/store';
import {loadPeopleSuccess} from './people.actions';
import { People } from '../people/people';

export interface PeopleState {
  people:People[]
}

export const peopleFeatureKey = 'people';

export interface PeopleRootState {
  [peopleFeatureKey]: PeopleState;
}

const initialState: PeopleState = { people:[]};

export const peopleReducer = createReducer(
  initialState,

  on(loadPeopleSuccess, (state, {people}) => ({
    ...state,
    people: people
  })),
);
