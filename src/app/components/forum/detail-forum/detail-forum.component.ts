import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DetailForumService } from 'src/app/services/forum/detail-forum/detail-forum.service';
import { ForumModel } from 'src/app/models/forum.model';
import { CommentModel } from 'src/app/models/comment.model';
@Component({
  selector: 'app-detail-forum',
  templateUrl: './detail-forum.component.html',
  styleUrls: ['./detail-forum.component.css']
})
export class DetailForumComponent implements OnInit {

  constructor(
    private detailForumService: DetailForumService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  forum: ForumModel = {
    by: '',
    descendants: 0,
    id: 0,
    kids: [],
    score: 0, 
    text: '',
    time: undefined,
    title: '',
    type: '',
    comments: Array<CommentModel>()
  };

  forumId: number;
  loading = true;
  
  ngOnInit(): void {
    this.forumId = this.route.snapshot.params['id'];
    this.getDetailForum(this.forumId);
  }

  getDetailForum(id: number): void {
    this.detailForumService.get(id)
      .subscribe(
        result => {
          if (result != null) {
            this.forum.by = result.by;
            this.forum.descendants = result.descendants;
            this.forum.id = result.id;
            this.forum.kids = result.kids === undefined ? [] : result.kids;
            this.forum.score = result.score;
            this.forum.text = result.text;
            this.forum.time = result.time * 1000;
            this.forum.title = result.title;
            this.forum.type = result.type;
            this.forum.comments = [];
            this.forum.kids.forEach((val) => {
              this.getComment(val);
            });
          } else {
            this.router.navigate(['/forum']);
          }
          
          this.loading = false;
        },
        error => {
          console.log(error);
        });
  }

  getComment(commentId: number): void {
    this.detailForumService.get(commentId)
    .subscribe(
      result => {
        let commentObj = new CommentModel();
        commentObj.by = result.by ?? 'Anonymous';
        commentObj.id = result.id;
        commentObj.text = result.text ?? '<i>No Comment</i>';
        commentObj.time = result.time * 1000;
        commentObj.type = result.type;
        this.forum.comments.push(commentObj);
      },
      error => {
        console.log(error);
      });
  }
}
