import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../effects/users.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([UsersEffects])
  ]
})
export class StoreEffectsModule { }
