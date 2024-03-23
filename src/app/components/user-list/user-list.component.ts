import { Component, OnInit } from '@angular/core';
import {NgFor, NgIf, AsyncPipe, NgOptimizedImage} from '@angular/common';
import {Store} from "@ngrx/store";
import {IUserListState, selectUserListAll, UserListActions} from "../../+state/user-list";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    NgOptimizedImage
  ]
})
export class UserListComponent implements OnInit {
  userList$ = this.userListStore.select(selectUserListAll);

  constructor(
    private readonly userListStore: Store<IUserListState>
  ) { }

  ngOnInit(): void {
    this.userListStore.dispatch(UserListActions.getUserListByPage({ page: 1 }));
  }

  onCreateClick(): void {

  }

  onUpdateClick(id?: number): void {
    const userid = id ? id : 0;

  }

  onDeleteClick(id?: number): void {
    const userid = id ? id : 0;

  }

  onClickPaging(): void {

  }
}
