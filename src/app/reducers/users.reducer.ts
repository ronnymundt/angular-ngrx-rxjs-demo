import { Action, createReducer, on } from '@ngrx/store';
import { createUser, loadUserList } from '../actions/users.actions';
import { IUserListState, IUser, IUserList } from '../interfaces/users.interface';

export const usersFeatureKey = 'users';

export const initialState: IUserListState = {
  usersList: <IUserList>{}
};

export const loadUserListReducer = createReducer(
  initialState,
  on(
    loadUserList,
    (state: IUserListState, { payload }) => {
      return {...state, usersList: payload }
    }
  )
);
