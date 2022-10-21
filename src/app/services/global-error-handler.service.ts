import { ErrorHandler, Injectable } from '@angular/core';
import { IGlobalError } from '../interfaces/global-error.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

    constructor() { }

    handleError(error: Error): void {
        const globalError: IGlobalError = {
            error: error,
            isError: true
        }

        console.log("GLOB ERROR: ", globalError);        

        // TODO push store        
    }
}
