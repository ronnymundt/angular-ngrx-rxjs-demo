import { Action, createReducer, on } from '@ngrx/store';
import { setGlobalErrors } from '../actions/global-error.actions';
import { IGlobalErrorState } from '../interfaces/global-error.interface';

export const globalErrorFeatureKey = 'globalError';

export const initialState: IGlobalErrorState = { 
    error: null,
    isError: false 
};

export const globalErrorReducer = createReducer(
  initialState,
  on(
    setGlobalErrors,
    (state: IGlobalErrorState, { payload }) => { 
      return { ...state, error: payload, isError: true }; 
    }
  )
);
