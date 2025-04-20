import { Component, OnInit } from '@angular/core';
import { NgIf, AsyncPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  IUserListState,
  selectUserListAll,
  selectUserListPagerCount,
  selectUserListTotalCount,
  UserListActions,
} from '../../+state/user-list';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [NgIf, AsyncPipe, NgClass],
})
export class UserListComponent implements OnInit {
  userList$ = this.userListStore.select(selectUserListAll);
  pagerCount$ = this.userListStore.select(selectUserListPagerCount);
  userListTotalCount$ = this.userListStore.select(selectUserListTotalCount);

  constructor(
    private readonly userListStore: Store<IUserListState>,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.userListStore.dispatch(UserListActions.getUserListByPage({ page: 1 }));
  }

  onDeleteClick(id?: number): void {
    if (!id) {
      return;
    }
    this.userListStore.dispatch(UserListActions.removeOne({ id }));
  }

  onPagingClick(): void {
    this.userListStore.dispatch(UserListActions.getUserListByPage({ page: 2 }));
  }

  addRadomUserClick() {
    this.userListStore.dispatch(UserListActions.addRandomUser());
  }

  async onDetailClick(id: number | undefined) {
    await this.router.navigate([`user/${id}`]);
  }
}
