import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private forumService: ForumService) { }

  forumIds: any;

  ngOnInit(): void {
    this.getForum();
  }

  getForum(): void {
    this.forumService.getAll()
      .subscribe(
        result => {
          this.forumIds = result;
          console.log(result);
        },
        error => {
          console.log(error);
        });
  }
}
