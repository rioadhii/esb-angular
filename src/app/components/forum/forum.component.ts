import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

import { ForumService } from 'src/app/services/forum/forum.service';
import { ForumDataProvider } from 'src/app/services/forum/forum.data-provider';
import { DetailForumService } from 'src/app/services/forum/detail-forum/detail-forum.service';

import { ForumModel } from 'src/app/models/forum.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  private readonly notifier: NotifierService;

  constructor(
    private router: Router,
    notifierService: NotifierService,
    private forumService: ForumService,
    private forumDataProvider: ForumDataProvider,
    private detailForumService: DetailForumService,
  ) {
    this.notifier = notifierService;
  }
  
  // initialize vars and data
  loading = true;
  page = 1;
  pageSize = 20;
  forumIds: any;
  forumList: Array<ForumModel> = [];

  ngOnInit(): void {
    // get cache data from global vars then map to list forum data
    const cacheData = this.forumDataProvider.getForumDataCache;
    this.forumList = cacheData.map(item => Object.assign([], item));

    if (this.forumList.length > 0) { // if any data in cache then render it
      this.loading = false;
    }
    else { // if there is no data in cache, then fetch from api
      this.getForum();
    }
  }

  getForum(): void {
    this.forumService.getAll()
      .subscribe(
        result => {
          this.forumIds = result;

          // handle no data on forum list
          if (this.forumIds === undefined) this.forumList = [];
          else {
            // fetch detail for each forum data
            this.forumIds.forEach((val) => {
              this.getDetailForum(val);
            });
          }  
        },
        error => {
          this.notifier.notify('error', 'Error while fetching data, try again later');
        }).add(() => {
          this.loading = false;
        });
  }

  getDetailForum(id: number): void {
    this.detailForumService.get(id)
      .subscribe(
        result => {
          let forumObj = new ForumModel();
          forumObj.by = result.by;
          forumObj.descendants = result.descendants;
          forumObj.id = result.id;
          forumObj.kids = result.kids === undefined ? [] : result.kids;
          forumObj.score = result.score;
          forumObj.text = result.text;
          forumObj.time = result.time * 1000;
          forumObj.title = result.title;
          forumObj.type = result.type;
          forumObj.comments = [];
          this.forumList.push(forumObj);

          // save fetched data to global vars/cache
          this.forumDataProvider.setForumDataCache(forumObj);
        },
        error => {
          this.loading = false;
          this.notifier.notify('error', 'Error while fetching data, try again later');
        });
  }

  // on click event when a table row clicked
  goToDetail(id: number): void {
    // navigate to detail page, pass id of forum
    this.router.navigate(['/forum/', id]);
  }
}
