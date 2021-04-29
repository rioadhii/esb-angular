import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum/forum.service';
import { DetailForumService } from 'src/app/services/forum/detail-forum/detail-forum.service';
import { ForumModel } from 'src/app/models/forum.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(
    private forumService: ForumService,
    private detailForumService: DetailForumService
  ) { }
  
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
          this.forumIds.forEach((val) => {
            this.getDetailForum(val);
          });
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
          forumObj.time = result.time;
          forumObj.title = result.title;
          forumObj.type = result.type;
          this.forumList.push(forumObj)
        },
        error => {
          console.log(error);
        });
  }
}
