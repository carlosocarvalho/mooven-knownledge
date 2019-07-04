import { GitSearchUserEntity } from './../../entities/git-search-user-entity';
import { GitSearchResultEntity } from './../../entities/git-search-result-entity';
import { GitService } from './../../services/git.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


/**
 * @package mooven-git
 * @class SearchComponent
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [GitService]
})
export class SearchComponent implements OnInit {

  public model: any;
  searching = false;
  searchFailed = false;


  constructor(
    private readonly _provider: GitService,
    private readonly router: Router) { }

  ngOnInit() { }
  /**
   * Formatando resultado selecionado
   */
  formatter = (result: any) => result.login.toLowerCase();
  /**
   * Observable por pesquisa
   */
  search = (text$: Observable<string>) => {
    const $this = this
    return text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),

      tap(() => this.searching = true),
      switchMap(term =>
        term.length < 2 ? of([]) :
          $this._provider.searchUsers(term)
            .pipe(
              tap(() => this.searchFailed = false),
              map((data: GitSearchResultEntity) => data.items),
              map(data => data.splice(0, 8))
            )
      ),
      tap(() => this.searching = false)
    )
  }

  selectItem(data: { item: GitSearchUserEntity }) {
    const { item } = data
    this.router.navigate([`/repositories/user/${item.login}`])
  }


}
