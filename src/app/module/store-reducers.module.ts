import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { loadUserListReducer, usersFeatureKey } from '../reducers/users.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeatureKey, loadUserListReducer),
  ]
})
export class StoreReducersModule { }
