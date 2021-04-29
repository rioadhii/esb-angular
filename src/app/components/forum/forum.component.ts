import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ForumService } from 'src/app/services/forum/forum.service';
import { DetailForumService } from 'src/app/services/forum/detail-forum/detail-forum.service';
import { ForumModel } from 'src/app/models/forum.model';
import { CommentModel } from 'src/app/models/comment.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(
    private forumService: ForumService,
    private detailForumService: DetailForumService,
    private router: Router
  ) { }
  
  loading = true;
  page = 1;
  pageSize = 20;
  forumIds: any;
  forumList: Array<ForumModel> = [];

  ngOnInit(): void {
    this.getForum();
  }

  getForum(): void {
    this.forumService.getAll()
      .subscribe(
        result => {
          this.forumIds = result;
          
          if (this.forumIds === undefined) this.forumList = [];
          else {
            this.forumIds.forEach((val) => {
              this.getDetailForum(val);
            });
          }
          this.loading = false;
        },
        error => {
          console.log(error);
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
        },
        error => {
          console.log(error);
        });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/forum/', id]);
  }
}
