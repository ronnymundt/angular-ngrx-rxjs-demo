import { isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { UserListEffects, userListReducer } from './app/+state/user-list';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterPaths } from './app/configs';
import { httpReqresApiKeyInterceptor } from './app/interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([httpReqresApiKeyInterceptor])),
    provideRouter(RouterPaths),
    provideStore({
      userListState: userListReducer,
    }),
    provideEffects([UserListEffects]),
    isDevMode()
      ? provideStoreDevtools({
          autoPause: true,
          trace: false,
          traceLimit: 75,
        })
      : [],
  ],
}).catch((err) => console.error(err));
