import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  changeSampleText,
  customIncrement,
} from '../counter/state/counter.actions';
import { getText } from '../counter/state/counter.selector';
import { ICounterState } from '../counter/state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.sass'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  sampleText$!: Observable<string>;

  constructor(private store: Store<{ counterModule: ICounterState }>) {}

  ngOnInit(): void {
    this.sampleText$ = this.store.select(getText);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: this.value }));
  }

  onChangeText() {
    this.store.dispatch(changeSampleText({ text: 'New Text' }));
  }
}
