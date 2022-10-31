import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { UserActions } from '../../actions/users.actions';
import { IUser, IUserListState } from '../../interfaces/users.interface';
import { selectUsers } from '../../selectors/users.selectors';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // PUBLIC
  public tableData$: Observable<Array<IUser>>;
  public isLoading$: Observable<boolean>;
  public page$: Observable<number>;

  // PRIVATE
  private _page: number = 1;

  constructor(
    private _store: Store<IUserListState>
  ) { 
    this.tableData$ = this._store.select(selectUsers).pipe(map(x => { return x.usersList.data; }));
    this.isLoading$ = this._store.select(selectUsers).pipe(map(x => { return x.isLoading; }));
    this.page$ = this._store.select(selectUsers).pipe(map(x => { return x.usersList.page; })); 
  }

  ngOnInit(): void {
    this._store.dispatch(UserActions.getUserList({page: this._page}));
  }

  private _user: IUser = {
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    email: "luke.skywalker@jedi.com",
    first_name: "Luke",
    last_name: "Skywalker"
  }

  //
  public onCreateClick(): void {
        this._store.dispatch(UserActions.createUser({ payload: this._user }));
  }

  //
  public onUpdateClick(id?: number): void {
    const userid = id ? id : 0;
    this._store.dispatch(UserActions.updateUser({userId: userid, userData: this._user }));
  }

  //
  public onDeleteClick(id?: number): void {
    const userid = id ? id : 0;
    this._store.dispatch(UserActions.deleteUser({id: userid}));
  }

  //
  public onClickPaging(direction: 'back' | 'next'): void {
    if(direction === 'back') {
      this._page--;
    } else {
      this._page++;
    }

    this._store.dispatch(UserActions.getUserList({page: this._page}));
  }
}
