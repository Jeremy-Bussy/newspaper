import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getAllArticles(): Observable<any> {
    const url = environment.api + '/articles/';
    console.log(url);

    return this.http.get(url);
  }

  getArticleById(id: number): Observable<any> {
    const url = environment.apiGoogle + '/articles?id=' + id;

    return this.http.get(url);
  }

  addArticle(article: ArticleModel): Observable<any> {
    const url = environment.apiGoogle + '/articles/';
    console.log(article);
    const params = {
      article
    };

    return this.http.post<any>(url, params);
  }

  hideArticle(id: number): Observable<any> {
    const url = environment.apiGoogle + '/articles/hide';

    const params = (
      id
    )
    return this.http.post<any>(url, params);
  }

  updateArticle(article: ArticleModel): Observable<any> {
    const url = environment.apiGoogle + '/articles';

    const params = (
      article
    )
    return this.http.put<any>(url, params);
  }
}
