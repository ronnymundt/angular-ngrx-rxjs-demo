import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserList, loadUserList } from '../../actions/users.actions';
import { IUserList, IUserListState } from '../../interfaces/users.interface';

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
  }

}
