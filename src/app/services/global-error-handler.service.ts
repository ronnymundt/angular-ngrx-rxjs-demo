import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { setGlobalErrors } from '../actions/global-error.actions';
import { IGlobalErrorState } from '../interfaces/global-error.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

    constructor(
        private _injector: Injector
    ) { }

    handleError(error: Error): void {
        const store = this._injector.get(Store<IGlobalErrorState>);        
        store.dispatch(setGlobalErrors({ payload: error })); 
    }
}
