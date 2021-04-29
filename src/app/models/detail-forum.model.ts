import { ForumModel } from './forum.model';

export class DetailForumModel {
    header: ForumModel;
    comments: Comment[];
}

export class Comment {
    by: string;
    id: number;
    text: string;
    time: any;
    type: string;
}
