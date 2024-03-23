import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUser} from "../+state/user-list";
import {IUserListResponse} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ReqResApiService {
  private readonly _usersUrl = "https://reqres.in/api/users";

  constructor(
    private readonly httpClient: HttpClient
  ) { }


  getUserListByPage(page: number): Observable<IUserListResponse> {
    const url = `${this._usersUrl}?page=${page}`;
    return this.httpClient.get<IUserListResponse>(url);
  }

  createUserByUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this._usersUrl, { user });
  }

  updateUserByIdAndUser(id: number, user: IUser): Observable<IUser> {
    const url = `${this._usersUrl}/${id}`;
    return  this.httpClient.put<IUser>(url, { user });
  }

  deleteUserById(id: number): Observable<null> {
    const url = `${this._usersUrl}/${id}`;
    return this.httpClient.delete<null>(url);
  }
}
