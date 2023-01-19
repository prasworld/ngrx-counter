import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter/state/counter.actions';
import { ICounterState } from '../counter/state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.sass'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counterModule: ICounterState }>) {}

  ngOnInit(): void {}

  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
}
