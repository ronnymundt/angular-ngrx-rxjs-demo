import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, Observable, of, switchMap, tap } from 'rxjs';
import { createUser, getUserList, loadUserList } from '../actions/users.actions';
import { IUserList } from '../interfaces/users.interface';
import { ReqresApiService } from '../services/reqresApi.service';

@Injectable()
export class UsersEffects {

  constructor(
    private _actions$: Actions,
    private _reqresinService: ReqresApiService
  ) {}

  /**
   * 
   */
  public getUserList$: Observable<Action> = createEffect(() => {
    return this._actions$.pipe(
      ofType(getUserList),
      mergeMap((action) => {
        return this._reqresinService.getUserListByPage$(action.page).pipe(
          map((userList: IUserList) => {
            return loadUserList({ payload: userList });
          })
        );
      })
    );
  });

  /**
   * 
   */
  public createUser$: Observable<Action> = createEffect(() => {
    return this._actions$.pipe(
      ofType(createUser),
      tap((action) => this._reqresinService.createUserByUser$(action.payload))
    )
  }, { dispatch: false });
}
