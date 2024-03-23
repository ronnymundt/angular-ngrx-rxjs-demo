import {ErrorHandler, importProvidersFrom, isDevMode} from '@angular/core';
import { AppComponent } from './app/app.component';
import { StoreEffectsModule } from './app/module/store-effects.module';
import { StoreReducersModule } from './app/module/store-reducers.module';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './app/reducers';
import { StoreModule } from '@ngrx/store';
import { RoutingModule } from './app/module/routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { GlobalErrorHandlerService } from './app/services/global-error-handler.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RoutingModule,
      StoreModule.forRoot(reducers, { metaReducers }),
      isDevMode() ? StoreDevtoolsModule.instrument() : [],
      StoreReducersModule,
      StoreEffectsModule
    ),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch(err => console.error(err));
