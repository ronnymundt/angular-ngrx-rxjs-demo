import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
  imports: [UserListComponent, RouterOutlet]
})
export class AppComponent { }
