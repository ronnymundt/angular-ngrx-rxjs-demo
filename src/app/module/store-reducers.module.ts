import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userListReducer, usersFeatureKey } from '../reducers/users.reducer';
import { globalErrorFeatureKey, globalErrorReducer } from '../reducers/global-error.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeatureKey, userListReducer),
    StoreModule.forFeature(globalErrorFeatureKey, globalErrorReducer)
  ]
})
export class StoreReducersModule { }
