import { CommentModel } from './comment.model';

export class ForumModel {
    id: number;
    by: string;
    title: string;
    score: number;
    descendants: number;
    time: any;
    type: string;
    kids: number[];
    text: string;
    comments: Array<CommentModel>;
}
