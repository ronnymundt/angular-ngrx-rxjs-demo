import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { createUser, deleteUser, getUserList, loadUserList, updateUser } from '../../actions/users.actions';
import { IUser, IUserList, IUserListState } from '../../interfaces/users.interface';
import { selectUsers, selectUserState } from '../../selectors/users.selectors';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public tableData: Observable<Array<IUser>>;
  public isLoading: Observable<boolean>;

  constructor(
    private _store: Store<IUserListState>
  ) { 
    this.tableData = this._store.select(selectUsers).pipe(map(x => { return x.usersList.data; }));
    this.isLoading = this._store.select(selectUsers).pipe(map(x => { return x.isLoading }));
  }

  ngOnInit(): void {
    this._store.dispatch(getUserList({page: 1}));
  }

  private _user: IUser = {
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    email: "test@test.com",
    first_name: "Luke",
    last_name: "Skywalker"
  }

  //
  public onButtonClick(): void {
        this._store.dispatch(createUser({ payload: this._user }));
  }

  //
  public onUpdateClick(): void {
    this._store.dispatch(updateUser({userId: 1, userData: this._user }));
  }

  //
  public onDeleteClick(): void {
    this._store.dispatch(deleteUser({id: 1}));
  }
}
