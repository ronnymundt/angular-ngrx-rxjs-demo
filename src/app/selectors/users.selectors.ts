import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserList, IUserListState } from '../interfaces/users.interface';
import { usersFeatureKey } from '../reducers/users.reducer';

export const selectUserState = createFeatureSelector<IUserListState>(usersFeatureKey);
export const selectUsers = createSelector(
    selectUserState,
    (state: IUserListState) => { return state; }
)