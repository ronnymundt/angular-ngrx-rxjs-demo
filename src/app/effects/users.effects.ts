import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { UserActions } from '../actions/users.actions';
import { IUser, IUserList } from '../interfaces/users.interface';
import { ReqresApiService } from '../services/reqres-api.service';
import { EErrors } from '../enums/errors.enum';

@Injectable()
export class UsersEffects {

  constructor(
    private _actions$: Actions,
    private _reqresinService: ReqresApiService
  ) {}

  /**
   * Effect wird bei Action getUserList asugefüht und läd User Liste von API und führt anschliessend  Action loadUserList aus.
   */ 
  public getUserList$: Observable<Action> = createEffect(() => {
    return this._actions$.pipe(
      ofType(UserActions.getUserList),
      mergeMap((action) => {
        return this._reqresinService.getUserListByPage$(action.page).pipe(
          map((userList: IUserList) => {
              return UserActions.loadUserList({ payload: userList });
          }),
          catchError(() => {      
            return of(UserActions.setUserError({ error: EErrors.requestUserList }));
          })
        );
      })
    );
  });

  /**
   * Effect wird bei Action createUser asugefüht und läd User Liste von API und führt anschliessend Action addUserList aus.
   */
  public createUser$: Observable<Action> = createEffect(() => {
    return this._actions$.pipe(
      ofType(UserActions.createUser),
      mergeMap((action) => {
        return this._reqresinService.createUserByUser$(action.payload).pipe(
          map((user: IUser) => {  
            return UserActions.addUserToList({ payload: user });
          }),  
          catchError(err => {
            return of(UserActions.setUserError({ error: EErrors.createUser }));
          })
        );
      })
    );
  });
  
  /**
   * Effect update User via REST API Service und führt anschliessend Action updateUserToList aus.
   */
  public updateUser$: Observable<Action> = createEffect(() => {
    return this._actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap((action) => {
        return this._reqresinService.updateUserByIdAndUser$(action.userId, action.userData).pipe(
          map((user: IUser) => {
            return UserActions.updateUserToList({ userId: action.userId, userData: user });
          }),
          catchError(() => {
            return of(UserActions.setUserError({ error: EErrors.updateUser }));
          })
        );
      })
    );
  });

  /**
   * Effect löscht einen User via REST API und führt anschliessend Action deleteUserToList aus.
   */
  public deleteUser$: Observable<Action> = createEffect(() => {
    return this._actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap((action) => {
        return this._reqresinService.deleteUserById$(action.id).pipe(
          map(() => {  
            return UserActions.deleteUserToList({id: action.id});
          }),
          catchError(() => {
            return of(UserActions.setUserError({ error: EErrors.deleteUser }));
          })
        );
      })
    );
  })
}
