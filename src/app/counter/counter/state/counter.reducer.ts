import { Action, createReducer, on } from '@ngrx/store';
import {
  customIncrement,
  decrement,
  increment,
  reset,
} from './counter.actions';
import { ICounterState, initialState } from './counter.state';

export function counterReducer(
  state: ICounterState | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, { value }) => {
    return {
      ...state,
      counter: state.counter + +value,
    };
  })
);
