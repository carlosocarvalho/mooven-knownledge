import { GitSearchResultEntity } from './../entities/git-search-result-entity';
import { GitSearchUserEntity } from './../entities/git-search-user-entity';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {


  private readonly api = environment.api

  constructor(private readonly http: HttpClient) { }

  public searchUsers(queryString: string): Observable<GitSearchResultEntity> {
    return this.http.get<GitSearchResultEntity>(`${this.api}search/users`, { params: { q: String(queryString) } })
  }

  public findRepositoriesByUser(username: string): Observable<any> {
    return this.http.get(`${this.api}users/${username}/repos`, {
      params: {
        sort: 'full_name',
        type: 'owner',
        direction: 'asc'

      }
    })
  }

}
