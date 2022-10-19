import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createUser, deleteUser, getUserList, loadUserList, updateUser } from '../../actions/users.actions';
import { IUser, IUserList, IUserListState } from '../../interfaces/users.interface';
import { selectUser } from '../../selectors/users.selectors';
import { ReqresApiService } from '../../services/reqresApi.service';

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

    this._store.select(selectUser).subscribe(x => console.log(x));
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
