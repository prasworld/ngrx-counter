import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../counter/state/counter.actions';
import { ICounterState } from '../counter/state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.sass'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;

  constructor(private store: Store<{ counterModule: ICounterState }>) {}

  ngOnInit(): void {}

  onAdd() {
    this.store.dispatch(customIncrement({ value: this.value }));
  }
}
