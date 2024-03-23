import { Component, OnInit } from '@angular/core';
import {NgFor, NgIf, AsyncPipe, NgClass} from '@angular/common';
import {Store} from "@ngrx/store";
import {
  IUserListState,
  selectUserListAll,
  selectUserListPagerCount,
  UserListActions
} from "../../+state/user-list";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    NgClass
  ]
})
export class UserListComponent implements OnInit {
  userList$ = this.userListStore.select(selectUserListAll);
  pagerCount$ = this.userListStore.select(selectUserListPagerCount);

  constructor(
    private readonly userListStore: Store<IUserListState>
  ) { }

  ngOnInit(): void {
    this.userListStore.dispatch(UserListActions.getUserListByPage({ page: 1 }));
  }

  onDeleteClick(id?: number): void {
    if(!id) {return;}
    this.userListStore.dispatch(UserListActions.removeOne({ id }));
  }

  onPagingClick(): void {
    this.userListStore.dispatch(UserListActions.getUserListByPage({ page: 2 }));
  }

  addRadomUserClick() {
    this.userListStore.dispatch(UserListActions.addRandomUser());
  }
}
