import { GitService } from './../../services/git.service';
import { GitSearchUserEntity } from './../../entities/git-search-user-entity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  gravatar = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y'

  public user: GitSearchUserEntity

  public repositoryData = [];

  public userName: string
  collectionSize = 0;
  page = 1;
  pageSize = 5

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly provider: GitService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if ((param && !param.user) || !param) return this.router.navigate(['/'])

      this.userName = param.user

    })

    this.provider.findRepositoriesByUser(this.userName)
      .pipe(
        tap(data => this.collectionSize = data.length),
        tap(data => this.user = data[0]['owner'])
      )
      .subscribe(data => {
        this.repositoryData = data
      })

  }

  get repositories() {


    return this.repositoryData.length === 0 ? [] : this.repositoryData.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)

  }

}
