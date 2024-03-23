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

  getUserById(id: number): Observable<{data: IUser}> {
    const url = `${this._usersUrl}/${id}`;
    return this.httpClient.get<{data: IUser}>(url);
  }
}
