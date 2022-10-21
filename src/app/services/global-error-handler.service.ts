import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setGlobalErrors } from '../actions/global-error.actions';
import { IGlobalErrorState } from '../interfaces/global-error.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

    constructor(
        
    ) { }

    handleError(error: Error): void {
        const globalError: IGlobalErrorState = {
            error: error,
            isError: true
        }        
        
        //this._store.dispatch(setGlobalErrors({ payload: globalError }));
    }
}
