import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

let actions$ = new Observable<Action>();

TestBed.configureTestingModule({
  providers: [provideMockActions(() => actions$)],
});
