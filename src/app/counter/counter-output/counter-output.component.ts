import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ICounterState } from '../counter/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.sass'],
})
export class CounterOutputComponent implements OnInit {
  counter$!: Observable<ICounterState>;
  constructor(private store: Store<{ counterModule: ICounterState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counterModule');
  }
}
