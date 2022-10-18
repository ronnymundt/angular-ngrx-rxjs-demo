import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createUser, getUserList, loadUserList } from '../../actions/users.actions';
import { IUser, IUserList, IUserListState } from '../../interfaces/users.interface';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private _store: Store<IUserListState>
  ) { }

  ngOnInit(): void {
    this._store.dispatch(getUserList({page: 1}));

    //this._store.dispatch(loadUserList({payload: <IUserList>{}}));

    this._createUser();
  }

  private _createUser(): void {
    const user: IUser = {
      avatar: "",
      email: "test@test.com",
      first_name: "Luke",
      last_name: "Skywalker"
    }

    this._store.dispatch(createUser({ payload: user }));
  }

}
