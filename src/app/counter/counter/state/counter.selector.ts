import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterState } from './counter.state';

const getCounterState = createFeatureSelector<ICounterState>('counterModule');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getText = createSelector(getCounterState, (state) => {
  return state.text;
});
