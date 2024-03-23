import {isDevMode} from '@angular/core';
import {provideEffects} from "@ngrx/effects";
import {UserListEffects, userListReducer} from "./app/+state/user-list";
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideStore} from '@ngrx/store';
import {bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideStore({
      userListState: userListReducer,
    }),
    provideEffects([
      UserListEffects
    ]),
    isDevMode() ? provideStoreDevtools({
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }) : [],
  ]
}).catch(err => console.error(err));
