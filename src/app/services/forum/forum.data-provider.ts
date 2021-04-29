import { Injectable } from '@angular/core';
import { ForumModel } from "../../models/forum.model";

@Injectable({
  providedIn: 'root'
})

export class ForumDataProvider {

    public forumDataCache: any = [];

    setForumDataCache(data: any) {
        this.forumDataCache = [];
        this.forumDataCache.push(data);
    }

    get getForumDataCache() {
        return this.forumDataCache;
    }

    constructor() {}
}
