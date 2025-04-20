import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from './user-list.model';

export const UserListActions = createActionGroup({
  source: 'UserList',
  events: {
    Init: emptyProps(),
    GetUserListByPage: props<{ page: number }>(),
    SetUserListPageProps: props<{
      page: number;
      per_page: number;
      total: number;
      total_pages: number;
    }>(),
    AddRandomUser: emptyProps(),

    // Entity Actions
    AddOne: props<{ user: IUser }>(),
    AddMany: props<{ users: IUser[] }>(),
    RemoveOne: props<{ id: number }>(),
  },
});
