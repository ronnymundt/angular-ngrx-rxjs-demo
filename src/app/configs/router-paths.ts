import { Routes } from '@angular/router';
import { UserListComponent } from '../components/user-list/user-list.component';

export const RouterPaths: Routes = [
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'user/:id',
    loadComponent: () =>
      import('../components/user-detail/user-detail.component').then(
        (m) => m.UserDetailComponent,
      ),
  },

  // otherwise redirect to login
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];
