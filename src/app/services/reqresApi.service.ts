import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserList } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {

  private readonly _usersUrl = "https://reqres.in/api/users";

  constructor(
    private _httpClient: HttpClient
  ) { }


  /**
   * Observable fragt die User Liste von der REST API ab.
   * @param page 
   * @returns 
   */
  public getUserListByPage$(page: number): Observable<IUserList> {
    const url = `${this._usersUrl}?page=${page}`;
    return this._httpClient.get<IUserList>(url);
  }

  /**
   * Observable erzeugt ein neuen User via REST API.
   * @param user 
   * @returns 
   */
  public createUserByUser$(user: IUser): Observable<IUser> { 
    return this._httpClient.post<IUser>(this._usersUrl, { ...user });
  }

  /**
   * Oberservable aktualisiert einen User viaREST API.
   * @param id 
   * @param user 
   * @returns 
   */
  public updateUserByIdAndUser$(id: number, user: IUser): Observable<IUser> {
    const url = `${this._usersUrl}/${id}`;
    return  this._httpClient.put<IUser>(url, { ...user });
  }

  /**
   * Oberservable löscht den User per ID.
   * @param id 
   * @returns 
   */
  public deleteUserById(id: number): Observable<null> {
    const url = `${this._usersUrl}/${id}`;
    return this._httpClient.delete<null>(url);
  }
}
