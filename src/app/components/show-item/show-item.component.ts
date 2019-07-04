import { GitService } from './../../services/git.service';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {

  projectUrl: string;
  constructor(private readonly provider: GitService,
    private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data: { project: string }) => {
      if (data.project !== '') {
        this.projectUrl = data.project
      }
    })

  }

}
