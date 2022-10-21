import { createAction, props } from '@ngrx/store';
import { IGlobalErrorState } from '../interfaces/global-error.interface';

export const setGlobalErrors = createAction(
  '[GlobalError] Set Global Errors',
  props<{ payload: Error }>()
);
