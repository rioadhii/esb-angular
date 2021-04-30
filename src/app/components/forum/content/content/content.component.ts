import { Component, Input} from '@angular/core';

import { ForumModel } from 'src/app/models/forum.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
  @Input() forum: ForumModel;
  @Input() isOnListPage: boolean;
}
