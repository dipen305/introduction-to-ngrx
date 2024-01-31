import {createFeatureSelector, createSelector} from '@ngrx/store';
import {peopleFeatureKey, PeopleRootState, PeopleState} from './people.reducer';

const selectPeopleFeature = createFeatureSelector<PeopleRootState, PeopleState>(peopleFeatureKey);

export const selectPeople = createSelector(selectPeopleFeature, state => state.people);

