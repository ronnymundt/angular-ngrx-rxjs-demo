import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [UserListComponent]
})
export class AppComponent {
  title = 'ngrx-rxjs-demo';
}
