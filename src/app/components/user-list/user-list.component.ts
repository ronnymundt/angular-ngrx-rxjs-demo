import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createUser, getUserList, loadUserList } from '../../actions/users.actions';
import { IUser, IUserList, IUserListState } from '../../interfaces/users.interface';
import { ReqresApiService } from '../../services/reqresApi.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private _store: Store<IUserListState>,
    private _reqresApiService: ReqresApiService
  ) { }

  ngOnInit(): void {
    this._store.dispatch(getUserList({page: 1}));

    //this._store.dispatch(loadUserList({payload: <IUserList>{}}));
  }

  /**
   * 
   */
  public onButtonClick(): void {
    const user: IUser = {
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      email: "test@test.com",
      first_name: "Luke",
      last_name: "Skywalker"
    }

    this._store.dispatch(createUser({ payload: user }));
  }

}
