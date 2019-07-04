import { GitService } from './../../services/git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {

  constructor(private readonly provider: GitService) { }

  ngOnInit() {
  }

}
