import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserListActions } from './user-list.actions';
import { IUser, IUserListState } from './user-list.model';

export const userListFeatureKey = 'userListState';
export const userListAdapter = createEntityAdapter<IUser>();
export const userListInitialState: IUserListState =
  userListAdapter.getInitialState({
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
  });

export const userListReducer = createReducer(
  userListInitialState,
  on(UserListActions.init, () => userListInitialState),
  on(UserListActions.addMany, (state, { users }) =>
    userListAdapter.addMany(users, state),
  ),
  on(
    UserListActions.setUserListPageProps,
    (state, { page, per_page, total, total_pages }) => ({
      ...state,
      page,
      per_page,
      total,
      total_pages,
    }),
  ),
  on(UserListActions.removeOne, (state, { id }) =>
    userListAdapter.removeOne(id, state),
  ),
  on(UserListActions.addOne, (state, { user }) =>
    userListAdapter.addOne(user, state),
  ),
);
