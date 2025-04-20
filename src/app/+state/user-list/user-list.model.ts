import { EntityState } from '@ngrx/entity';

export interface IUserListState extends EntityState<IUser> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface IUser {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
