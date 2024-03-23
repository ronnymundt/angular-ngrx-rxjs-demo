import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {IUser} from "./user-list.model";

export const UserListActions = createActionGroup({
  source: 'UserList',
  events: {
    'Init': emptyProps(),
    'GetUserListByPage': props<{ page: number }>(),
    'SetUserListPageProps': props<{ page: number, per_page: number, total: number, total_pages: number }>(),

    // Entity Actions
    'AddMany': props<{ users: IUser[] }>(),


    /*'AddUser': props<{ user: IUser }>(),
    'UpsertUser': props<{ user: IUser }>(),
    'AddUsers': props<{ users: IUser[] }>(),
    'UpsertUsers': props<{ users: IUser[] }>(),
    'UpdateUser': props<{ user: IUser }>(),
    'UpdateUsers': props<{ users: IUser[] }>(),
    'DeleteUser': props<{ id: number }>(),
    'DeleteUsers': props<{ ids: number[] }>(),*/
  }
});
