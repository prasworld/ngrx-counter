import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { getCounter } from '../counter/state/counter.selector';
import { ICounterState } from '../counter/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.sass'],
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  constructor(private store: Store<{ counterModule: ICounterState }>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data) => {
      console.log('Counter Data Changed');
      this.counter = data;
    });
  }
}
