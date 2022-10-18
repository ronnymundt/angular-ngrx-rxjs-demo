import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserList } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresinService {

  private readonly reqUrl = "https://reqres.in/api/users";

  constructor(
    private _httpClient: HttpClient
  ) { }


  /**
   * Observable fragt die User Liste von der REST API ab.
   * @param page 
   * @returns 
   */
  public getUserListByPage$(page: number): Observable<IUserList> {
    const url = `${this.reqUrl}?page=${page}`;
    return this._httpClient.get<IUserList>(url);
  }
}
