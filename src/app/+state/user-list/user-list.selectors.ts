import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserListState } from './user-list.model';
import { userListAdapter, userListFeatureKey } from './user-list.reducer';

const selectUserListState =
  createFeatureSelector<IUserListState>(userListFeatureKey);

const { selectIds, selectEntities, selectAll, selectTotal } =
  userListAdapter.getSelectors(selectUserListState);

export const selectUserListAll = createSelector(selectAll, (users) => users);

export const selectUserListPagerCount = createSelector(
  selectUserListState,
  (state) => ({ current: state.page, total: state.total_pages }),
);

export const selectUserListTotalCount = createSelector(
  selectTotal,
  (total) => total,
);

export const selectUserListUserById = (id: number) =>
  createSelector(selectEntities, (entities) => entities[id]);
