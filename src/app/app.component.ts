import { Component } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  count$: Observable<number>;
  
  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select('count'));
  }

  count() {
    this.store.dispatch({
      type: 'COUNT'
    })
  }
}
