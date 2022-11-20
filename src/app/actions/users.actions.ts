import { createAction, createActionGroup, props } from '@ngrx/store';
import { IUser, IUserList } from '../interfaces/users.interface';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Get User List': props<{ page: number }>(),
    'Load User List':  props<{ payload: IUserList }>(),
    'Create User': props<{ payload: IUser }>(),
    'Add User To List': props<{ payload: IUser }>(),
    'Update User': props<{ userId: number, userData: IUser }>(),
    'Update User To List': props<{ userId: number, userData: IUser }>(),
    'Delete User': props<{ id: number }>(),
    'Delete User To List': props<{ id: number }>(),
    'Set User Error': props<{ error: string }>()
  }
});