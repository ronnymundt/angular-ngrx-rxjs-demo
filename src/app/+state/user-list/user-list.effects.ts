import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {map, switchMap, tap} from "rxjs";
import {ReqResApiService} from "../../services/req-res-api.service";
import {UserListActions} from "./user-list.actions";
import {IUserListState} from "./user-list.model";

@Injectable()
export class UserListEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly reqResApiService: ReqResApiService,
    private readonly userListState: Store<IUserListState>
  ) {}

  getUserListByPage = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserListActions.getUserListByPage),
      switchMap(({ page }) => this.reqResApiService.getUserListByPage(page).pipe(
        tap((response) =>
          this.userListState.dispatch(UserListActions.setUserListPageProps({
            page: response.page,
            per_page: response.per_page,
            total: response.total,
            total_pages: response.total_pages,
          }))
        ),
        map(response => UserListActions.addMany({ users: response.data })),
      ))
    );
  });

  addRandomUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserListActions.addRandomUser),
      switchMap(() => this.reqResApiService.getUserById(Math.floor(Math.random() * 12) + 1).pipe(
        map(user => UserListActions.addOne({user: {
          ...user.data,
          id: Math.floor(Math.random() * (9999 - 13)) + 13, // Random ID

        }})),
      ))
    );
  });
}
