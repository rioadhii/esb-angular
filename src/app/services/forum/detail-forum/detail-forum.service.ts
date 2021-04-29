import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const baseURL = environment.apiUrl + '/item/';

@Injectable({
  providedIn: 'root'
})
export class DetailForumService {

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<any> {
    return this.httpClient.get(baseURL + id + '.json');
  }
}
