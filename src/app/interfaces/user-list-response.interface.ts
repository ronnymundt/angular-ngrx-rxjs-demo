import { IUser } from '../+state/user-list';

export interface IUserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<IUser>;
  support: IUserSupport;
}

export interface IUserSupport {
  url: string;
  text: string;
}
