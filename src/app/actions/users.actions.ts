import { createAction, props } from '@ngrx/store';
import { IUser } from '../interfaces/users.interface';

export const getUserList = createAction(
  '[User] Get Users List',
  props<{ page: number }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<{ payload: IUser }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ payload: IUser }>()
);

export const deleteUser = createAction(
  '[User] Delete User',
  props<{ id: number }>()
);