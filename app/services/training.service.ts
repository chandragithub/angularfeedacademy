import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { staticData } from '../../global/static';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  baseUrl: Array<any> = staticData.server;
  pageUrl = '';
  constructor(private http: Http) {
    this.baseUrl.forEach(server => {
      if (server.name) {
        this.pageUrl = server.url + 'assets/data/training/';
      } else {
        this.pageUrl = 'assets/data/training/';
      }
    });
  }

  public getTrainingList(): Observable<any> {
    return this.http.get(this.pageUrl + '/list.json');
  }

}
