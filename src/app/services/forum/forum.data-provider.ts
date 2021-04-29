import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ForumDataProvider {

    public forumDataCache: any = [];

    setForumDataCache(data: any) {
        // store passed data to global vars
        this.forumDataCache.push(data);
    }

    get getForumDataCache() {
        // return stored data
        return this.forumDataCache;
    }

    constructor() {}
}
