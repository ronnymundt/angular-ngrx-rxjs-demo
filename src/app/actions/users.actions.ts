import { createAction, props } from '@ngrx/store';
import { IUser, IUserList } from '../interfaces/users.interface';

//
export const getUserList = createAction(
  '[User] Get User List',
  props<{ page: number }>()
);

export const loadUserList = createAction(
  '[User] Load User List',
  props<{ payload: IUserList }>()
);

//
export const createUser = createAction(
  '[User] Create User',
  props<{ payload: IUser }>()
);

export const addUserToList = createAction(
  '[User] Add User List',
  props<{ payload: IUser }>()
);

//
export const updateUser = createAction(
  '[User] Update User',
  props<{ payload: IUser }>()
);

export const deleteUser = createAction(
  '[User] Delete User',
  props<{ id: number }>()
);