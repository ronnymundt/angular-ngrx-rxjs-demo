import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {switchMap, take} from "rxjs";
import {IUser, IUserListState, selectUserListUserById} from "../../+state/user-list";

@Component({
  selector: 'user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  user: IUser | null = null;
  protected readonly history = history;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userListSate: Store<IUserListState>
  ) { }

  ngOnInit(): void {
    this.initSubs();
  }

  private initSubs(): void {
    this.route.paramMap
      .pipe(
        take(1),
        switchMap(params =>
          this.userListSate.select(selectUserListUserById(+(params.get('id') as string))))
      ).subscribe(user => {
        this.user = user ?? null;
      });
  }
}
