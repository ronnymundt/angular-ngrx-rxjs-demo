import { Action, createReducer, on } from '@ngrx/store';
import { addUserToList, createUser, deleteUserToList, getUserList, loadUserList, updateUser, updateUserToList } from '../actions/users.actions';
import { IUserListState, IUser, IUserList } from '../interfaces/users.interface';

export const usersFeatureKey = 'users';

export const initialState: IUserListState = {
  usersList: <IUserList>{},
  isLoading: false
};

export const loadUserListReducer = createReducer(
  initialState, 
  on(
    getUserList,
    (state: IUserListState, {page: number}) => {
      return { ...state, isLoading: true }
    }
  ),
  on(
    loadUserList,
    (state: IUserListState, { payload }) => {      
      return { ...state, usersList: payload, isLoading: false };
    }
  ),
  on(
    createUser,
    (state: IUserListState) => {
      return {...state, isLoading: true }
    }
  ),
  on(
    addUserToList,
    (state: IUserListState, { payload }) => {
      let cloneState = <IUserListState>JSON.parse(JSON.stringify(state)); 
      cloneState.usersList.data.push(payload); // füge daten zu State hinzu, da Demo REST API Daten nicht schreibt
      return { ...cloneState, isLoading: false };
    }
  ),
  on(
    updateUser,
    (state: IUserListState) => {
      return { ...state, isLoading: true }
    }
  ),
  on(
    updateUserToList,
    (state: IUserListState, { userId, userData }) => {
      let cloneState = <IUserListState>JSON.parse(JSON.stringify(state));
      for(let user of cloneState.usersList.data) {
        if(user.id !== userId) { continue; }

        user = Object.assign(user, userData); // update daten im State, da Demo REST API Daten nicht schreibt
        break;
      }        

      return { ...cloneState, isLoading: false };
    }
  ),
  on(
    deleteUserToList,
    (state: IUserListState, { id }) => {

      // TODO: user per id aus state filtern/löschen

      return { ...state, isLoading: false };
    }
  )
);
